# -*- coding: utf-8 -*-
"""
    TIVY_mat
    ~~~~~~
	Modified from flaskr
    A microblog example application written as Flask tutorial with
    Flask and sqlite3.

    :copyright: (c) 2015 by Armin Ronacher.
    :license: BSD, see LICENSE for more details.
"""
#import win32api
import os
import sys
#import psycopg2
#import urlparse
from sqlite3 import dbapi2 as sqlite3
from flask import flash, Flask, request, Response, session, g, redirect, url_for, abort, \
     render_template, flash, send_from_directory, jsonify
from werkzeug.utils import secure_filename
from time import gmtime, strftime
#from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__,static_url_path='/static')


@app.route('/')
def index():
    if request.headers.getlist("X-Forwarded-For"):
        ip = request.headers.getlist("X-Forwarded-For")[0]
    else:
        ip = request.remote_addr       
    session['IP'] = ip#request.environ['REMOTE_ADDR']
    #session['IP2'] = ip#request.environ['REMOTE_ADDR']
    session['logged_in'] = True
    session['username'] = 'Guest'    
    session['current'] = 0
    session['starttime'] = [0, 0, 0, 0, 0]
    session['endtime'] = [0, 0, 0, 0, 0]
    session['time'] = [0, 0, 0, 0, 0]
    session['click'] = [0, 0, 0, 0, 0]
    session['choice'] = ['Q', 'Q', 'Q', 'Q', 'Q']
    session['order'] = [0, 1, 2, 3, 4]
    session['starttime'][0] = strftime("%Y-%m-%d %H:%M:%S", gmtime())
    session['disabled'] = True
    #db = get_db()
    #cur = db.execute('select IP_add, Q1_n, Q1_ans, Q1_click, Q1_stime, Q1_etime, Q2_n, Q2_ans, Q2_click, Q2_stime, Q2_etime from entries order by id desc')
    #entries = cur.fetchall()    
    return render_template('TIVY_mat_int.html')

def get_ip():
    return jsonify(origin=request.headers.get('X-Forwarded-For', request.remote_addr))


# Load default config and override config from an environment variable
app.config.update(dict(
    DATABASE=os.path.join(app.root_path, 'TIVY_mat.db'),
    DEBUG=True,
    SECRET_KEY='development key',
    USERNAME=['GUEST'],
    PASSWORD=['NONE'],
    USERDATA={'mouseclick':[0, 0, 0, 0, 0], 'time':[0, 0, 0, 0, 0]},
))
app.config.from_envvar('TIVY_mat_SETTINGS', silent=True)

def connect_db():
    """Connects to the specific database."""
    rv = sqlite3.connect(app.config['DATABASE'])
    rv.row_factory = sqlite3.Row
    return rv

def init_db():
    """Initializes the database."""
    with app.app_context():
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

@app.route('/progress', methods=['GET', 'POST'])
def progress():
    if request.method == 'POST':
        ind = session['current']
        #session['choice'][ind] = request.form['option']
        if session['current'] == 0:
            session['endtime'][ind] = strftime("%Y-%m-%d %H:%M:%S", gmtime())
            session['starttime'][ind+1] = strftime("%Y-%m-%d %H:%M:%S", gmtime())
            
            session['click'][ind] = request.form['clickdata']
            session['time'][ind] = request.form['totaltime']
            db = get_db()    
            db.execute('insert into userlog (IP_add, Task_number, user_log) values (?, ?, ?)',
                       [session['IP'], 1,session['click'][ind]])
               #[str(session['IP']), str(session['current'][ind]), str(session['click'][ind])])
            db.commit()  
        session['current'] = session['current'] + 1              
        return render_template('TIVY_mat_int2.html')            

@app.route('/progress2', methods=['GET', 'POST'])
def progress2():
    if request.method == 'POST':
        ind = session['current']
        #session['choice'][ind] = request.form['option']
        if session['current'] == 1:
            session['endtime'][ind] = strftime("%Y-%m-%d %H:%M:%S", gmtime())
            session['starttime'][ind+1] = strftime("%Y-%m-%d %H:%M:%S", gmtime())
            
            session['click'][ind] = request.form['clickdata']
            session['time'][ind] = request.form['totaltime']
            db = get_db()    
            db.execute('insert into userlog (IP_add, Task_number, user_log) values (?, ?, ?)',
               [session['IP'], '2', session['click'][ind]])
            db.commit()
        session['current'] = session['current'] + 1     
        return render_template('TIVY_mat_int3.html')  
        
@app.route('/progress3', methods=['GET', 'POST'])
def progress3():
    if request.method == 'POST':
        ind = session['current']

        #session['endtime'][ind] = strftime("%Y-%m-%d %H:%M:%S", gmtime())
        #session['starttime'][ind+1] = strftime("%Y-%m-%d %H:%M:%S", gmtime())
            
        #session['click'][ind] = request.form['clickdata']
        #session['time'][ind] = request.form['totaltime']
        #db = get_db()    
        #db.execute('insert into userlog (IP_add, Task_number, user_log) values (?, ?, ?)',
        #   [session['IP'], '3', session['click'][ind]])
        #db.commit()
        
        #session['current'] = session['current'] + 1       
        return render_template('TIVY_mat_int4.html')               

@app.route('/progress4', methods=['GET', 'POST'])
def progress4():
    if request.method == 'POST':
        ind = session['current']

        #session['endtime'][ind] = strftime("%Y-%m-%d %H:%M:%S", gmtime())

        #db = get_db()    
        #db.execute('insert into userlog (IP_add, Task_number, user_log) values (?, ?, ?)',
        #   [session['IP'], '4', session['click'][ind]])
            
        #db.execute('insert into user_data (IP_add, T1_start, T1_end, T1_sec, T2_start, T2_end, T2_sec, T3_start, T3_end, T3_sec, T4_start, T4_end, T4_sec) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        #           [session['IP'], session['starttime'][0], session['endtime'][0], str(session['time'][0]),
        #            session['starttime'][1], session['endtime'][1], str(session['time'][1]),
        #            session['starttime'][2], session['endtime'][2], str(session['time'][2]),
        #            session['starttime'][3], session['endtime'][3], str(session['time'][3])])
        #db.commit()
            
        #cur = db.execute('select IP_add, T1_start, T1_end, T1_sec, T2_start, T2_end, T2_sec, T3_start, T3_end, T3_sec, T4_start, T4_end, T4_sec from user_data order by id asc')
        #cur2 = db.execute('select IP_add, Task_number, user_log from userlog order by id asc')    
        #user_data = cur.fetchall()
        #userlogs = cur2.fetchall()
        

        session['current'] = session['current'] + 1   
        return render_template('TIVY_mat_int5.html')           

@app.route('/progress5', methods=['GET', 'POST'])
def progress5():
    if request.method == 'POST':
        ind = session['current']

        #session['endtime'][ind] = strftime("%Y-%m-%d %H:%M:%S", gmtime())
        #session['starttime'][ind+1] = strftime("%Y-%m-%d %H:%M:%S", gmtime())
            
        #session['click'][ind] = request.form['clickdata']
        #session['time'][ind] = request.form['totaltime']
        #db = get_db()    
        #db.execute('insert into userlog (IP_add, Task_number, user_log) values (?, ?, ?)',
        #   [session['IP'], '3', session['click'][ind]])
        #db.commit()
        
        #session['current'] = session['current'] + 1       
        return render_template('TIVY_mat_int6.html') 

@app.route('/progress6', methods=['GET', 'POST'])
def progress6():
    if request.method == 'POST':
        ind = session['current']

        #session['endtime'][ind] = strftime("%Y-%m-%d %H:%M:%S", gmtime())

        #db = get_db()    
        #db.execute('insert into userlog (IP_add, Task_number, user_log) values (?, ?, ?)',
        #   [session['IP'], '4', session['click'][ind]])
            
        #db.execute('insert into user_data (IP_add, T1_start, T1_end, T1_sec, T2_start, T2_end, T2_sec, T3_start, T3_end, T3_sec, T4_start, T4_end, T4_sec) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        #           [session['IP'], session['starttime'][0], session['endtime'][0], str(session['time'][0]),
        #            session['starttime'][1], session['endtime'][1], str(session['time'][1]),
        #            session['starttime'][2], session['endtime'][2], str(session['time'][2]),
        #            session['starttime'][3], session['endtime'][3], str(session['time'][3])])
        #db.commit()
            
        #cur = db.execute('select IP_add, T1_start, T1_end, T1_sec, T2_start, T2_end, T2_sec, T3_start, T3_end, T3_sec, T4_start, T4_end, T4_sec from user_data order by id asc')
        #cur2 = db.execute('select IP_add, Task_number, user_log from userlog order by id asc')    
        #user_data = cur.fetchall()
        #userlogs = cur2.fetchall()
        

        session['current'] = session['current'] + 1   
        return render_template('TIVY_mat_int7.html')  

@app.route('/progress7', methods=['GET', 'POST'])
def progress7():
    if request.method == 'POST':
        ind = session['current']

        #session['endtime'][ind] = strftime("%Y-%m-%d %H:%M:%S", gmtime())
        #session['starttime'][ind+1] = strftime("%Y-%m-%d %H:%M:%S", gmtime())
            
        #session['click'][ind] = request.form['clickdata']
        #session['time'][ind] = request.form['totaltime']
        #db = get_db()    
        #db.execute('insert into userlog (IP_add, Task_number, user_log) values (?, ?, ?)',
        #   [session['IP'], '3', session['click'][ind]])
        #db.commit()
        
        #session['current'] = session['current'] + 1       
        return render_template('TIVY_mat_int8.html') 

@app.route('/progress8', methods=['GET', 'POST'])
def progress8():
    if request.method == 'POST':
        ind = session['current']

        #session['endtime'][ind] = strftime("%Y-%m-%d %H:%M:%S", gmtime())
        #session['starttime'][ind+1] = strftime("%Y-%m-%d %H:%M:%S", gmtime())
            
        #session['click'][ind] = request.form['clickdata']
        #session['time'][ind] = request.form['totaltime']
        #db = get_db()    
        #db.execute('insert into userlog (IP_add, Task_number, user_log) values (?, ?, ?)',
        #   [session['IP'], '3', session['click'][ind]])
        #db.commit()
        
        #session['current'] = session['current'] + 1       
        return render_template('TIVY_mat_int9.html') 


@app.route('/progress9', methods=['GET', 'POST'])
def progress9():
    if request.method == 'POST':
        ind = session['current']

        #session['endtime'][ind] = strftime("%Y-%m-%d %H:%M:%S", gmtime())
        #session['starttime'][ind+1] = strftime("%Y-%m-%d %H:%M:%S", gmtime())
            
        #session['click'][ind] = request.form['clickdata']
        #session['time'][ind] = request.form['totaltime']
        #db = get_db()    
        #db.execute('insert into userlog (IP_add, Task_number, user_log) values (?, ?, ?)',
        #   [session['IP'], '3', session['click'][ind]])
        #db.commit()
        
        #session['current'] = session['current'] + 1       
        return render_template('TIVY_mat_int10.html') 
    
@app.route('/progress10', methods=['GET', 'POST'])
def progress10():
    if request.method == 'POST':
        ind = session['current']

        #session['endtime'][ind] = strftime("%Y-%m-%d %H:%M:%S", gmtime())
        #session['starttime'][ind+1] = strftime("%Y-%m-%d %H:%M:%S", gmtime())
            
        #session['click'][ind] = request.form['clickdata']
        #session['time'][ind] = request.form['totaltime']
        #db = get_db()    
        #db.execute('insert into userlog (IP_add, Task_number, user_log) values (?, ?, ?)',
        #   [session['IP'], '3', session['click'][ind]])
        #db.commit()
        
        #session['current'] = session['current'] + 1       
        return render_template('TIVY_mat_int11.html')     
    


@app.route('/selection', methods=['GET', 'POST'])
def selection():
    if request.method == 'POST':
        ind = session['current']
        session['choice'][ind] = request.form['option']
        session['disabled'] = False
        
        return render_template('TIVY_mat_int_results.html')

@app.route("/getPlotCSV")
def getPlotCSV():
    db = get_db() 
    cur = db.execute('select IP_add, T1_start, T1_end, T1_sec, T2_start, T2_end, T2_sec, T3_start, T3_end, T3_sec, T4_start, T4_end, T4_sec from user_data order by id asc')
    cur2 = db.execute('select IP_add, Task_number, user_log from userlog order by id asc')
        
    user_data = cur.fetchall()
    userlogs = cur2.fetchall()
    
    output = 'IP_add, T1_start, T1_end, T1_sec, T2_start, T2_end, T2_sec, T3_start, T3_end, T3_sec, T4_start, T4_end, T4_sec\n'
    for datum in user_data:
        for subdatum in datum:
            output = output + subdatum.encode('ascii','ignore') + ','
        output = output + '\n'    
    
    output = output + '\n' 
    output = output + 'IP_add, Task_number, user_log\n'
    i = 0
    for datum in userlogs:
        unilogs = userlogs[i][2].encode('ascii','ignore')
        logs = unilogs.split(';')
        for datum in logs:
            output = output + userlogs[i][0].encode('ascii','ignore') + ',' + userlogs[i][1].encode('ascii','ignore') + ',' + datum + '\n'
        i=i+1    
        #output = output + '\n'    
        #output = output + dataum.IP_add + ','
        #output = output + dataum.Task_number + ','
        #output = output + dataum.user_log + ','
        #output = output + '\n'                  
    return Response(
        output,
        mimetype="text/csv",
        headers={"Content-disposition":
                 "attachment; filename=myplot.csv"})


if __name__ == "__main__":
    init_db()
    app.run()
