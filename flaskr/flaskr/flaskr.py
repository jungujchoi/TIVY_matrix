# -*- coding: utf-8 -*-
"""
    Flaskr
    ~~~~~~

    A microblog example application written as Flask tutorial with
    Flask and sqlite3.

    :copyright: (c) 2015 by Armin Ronacher.
    :license: BSD, see LICENSE for more details.
"""
#import win32api
import os
from sqlite3 import dbapi2 as sqlite3
from flask import flash, Flask, request, session, g, redirect, url_for, abort, \
     render_template, flash




# create our little application :)
app = Flask(__name__)

# Load default config and override config from an environment variable
app.config.update(dict(
    DATABASE=os.path.join(app.root_path, 'flaskr.db'),
    DEBUG=True,
    SECRET_KEY='development key',
    USERNAME=['admin'],
    PASSWORD=['1234']
))
app.config.from_envvar('FLASKR_SETTINGS', silent=True)


def connect_db():
    """Connects to the specific database."""
    rv = sqlite3.connect(app.config['DATABASE'])
    rv.row_factory = sqlite3.Row
    return rv


def init_db():
    """Initializes the database."""
    db = get_db()
    with app.open_resource('schema.sql', mode='r') as f:
        db.cursor().executescript(f.read())
    db.commit()


@app.cli.command('initdb')
def initdb_command():
    """Creates the database tables."""
    init_db()
    print('Initialized the database.')


def get_db():
    """Opens a new database connection if there is none yet for the
    current application context.
    """
    if not hasattr(g, 'sqlite_db'):
        g.sqlite_db = connect_db()
    return g.sqlite_db


@app.teardown_appcontext
def close_db(error):
    """Closes the database again at the end of the request."""
    if hasattr(g, 'sqlite_db'):
        g.sqlite_db.close()


@app.route('/')
def show_entries():
    db = get_db()
    cur = db.execute('select title, text, author from entries order by id desc')
    entries = cur.fetchall()
    return render_template('show_entries.html', entries=entries)


@app.route('/add', methods=['POST'])
def add_entry():
    if not session.get('logged_in'):
        abort(401)
    db = get_db()
    author = session['username']
    db.execute('insert into entries (title, text, author) values (?, ?, ?)',
               [request.form['title'], request.form['text'], author])
    db.commit()
    flash('New entry was successfully posted')
    #flash(request.form['title'] + ' ' + request.form['text'] + ' ' + author)
    return redirect(url_for('show_entries'))


@app.route('/login', methods=['GET', 'POST'])
def login():
    error = None
    if request.method == 'POST':
        var1 = 0
        find = 0
        for x in app.config['USERNAME']:
            if request.form['username'] == x and request.form['password'] == app.config['PASSWORD'][var1]:
                find = 1
                
            var1 = var1 + 1
            #else:
                #win32api.MessageBox(0, 'hello', 'title')
        if find == 1:
            session['logged_in'] = True
            session['username'] = request.form['username'].strip()
            flash('You are logged in')
            return redirect(url_for('show_entries'))
        else: 
            error = 'Invalid username or password'

        #if request.form['username'] != app.config['USERNAME']:
        #    error = 'Invalid username'
        #elif request.form['password'] != app.config['PASSWORD']:
        #    error = 'Invalid password'
        #else:
        #    session['logged_in'] = True
        #    Flash('You were logged in')
        #    return redirect(url_for('show_entries'))
    return render_template('login.html', error=error)


@app.route('/newAccount', methods=['GET', 'POST'])
def newAccount():
    error = None
    user = None
    if request.method == 'POST':
        users = app.config['USERNAME']
        passwords = app.config['PASSWORD']
        if request.form['newuser'] in users:
            error = "The username already exists!"
            #return redirect(url_for('newAccount'))
        elif request.form['password'] != request.form['repass']:
            error = "The password and re-typed password do not match!!!"
            user = request.form['newuser']
        else:
            #new_user_array = users.append(request.form['newuser'])
            #new_pass_array = passwords.append(request.form['password'])
            #app.config.update(dict(
            #    USERNAME=new_user_array,
            #    PASSWORD=new_pass_array))
            app.config['USERNAME'].append(request.form['newuser'].strip())
            app.config['PASSWORD'].append(request.form['password'].strip())
            
            #flash('You have successfully created a username')# + request.form['newuser'])  
            session['logged_in'] = True 
            session['username'] = request.form['newuser'].strip()
            #print new_user_array
            return redirect(url_for('show_entries'))
                
    return render_template('newAccount.html', error=error, user=user)

@app.route('/logout')
def logout():
    session.pop('logged_in', None)
    flash('You have successfully logged out!')
    #flash(app.config['USERNAME'])
    return redirect(url_for('show_entries'))