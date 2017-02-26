# -*- coding: utf-8 -*-
"""
    Flaskr Tests
    ~~~~~~~~~~~~

    Tests the Flaskr application.

    :copyright: (c) 2015 by Armin Ronacher.
    :license: BSD, see LICENSE for more details.
"""

import os
import tempfile
import pytest
from TIVY_mat import TIVY_mat


@pytest.fixture
def client(request):
    db_fd, TIVY_mat.app.config['DATABASE'] = tempfile.mkstemp()
    TIVY_mat.app.config['TESTING'] = True
    client = TIVY_mat.app.test_client()
    with TIVY_mat.app.app_context():
        TIVY_mat.init_db()

    def teardown():
        os.close(db_fd)
        os.unlink(TIVY_mat.app.config['DATABASE'])
    request.addfinalizer(teardown)

    return client


def login(client, username, password):
    return client.post('/login', data=dict(
        username=username,
        password=password
    ), follow_redirects=True)

def newAccount(client, newuser, password, repass):
    return client.post('/newAccount', data=dict(
        newuser=newuser,
        password=password,
        repass=repass
    ), follow_redirects=True)


def logout(client):
    return client.get('/logout', follow_redirects=True)


def test_empty_db(client):
    """Start with a blank database."""
    rv = client.get('/')
    assert b'No entries here so far' in rv.data


def test_login_logout(client):
    """Make sure login and logout works"""
    rv = login(client, TIVY_mat.app.config['USERNAME'],
               TIVY_mat.app.config['PASSWORD'])
    assert b'You were logged in' in rv.data
    rv = logout(client)
    assert b'You were logged out' in rv.data
    rv = login(client, TIVY_mat.app.config['USERNAME'] + 'x',
               TIVY_mat.app.config['PASSWORD'])
    assert b'Invalid username' in rv.data
    rv = login(client, TIVY_mat.app.config['USERNAME'],
               TIVY_mat.app.config['PASSWORD'] + 'x')
    assert b'Invalid password' in rv.data


def test_messages(client):
    """Test that messages work"""
    login(client, TIVY_mat.app.config['USERNAME'],
          TIVY_mat.app.config['PASSWORD'])
    rv = client.post('/add', data=dict(
        title='<Hello>',
        text='<strong>HTML</strong> allowed here',
        author='<noone>',
        page='<none>'
    ), follow_redirects=True)
    assert b'No entries here so far' not in rv.data
    assert b'&lt;Hello&gt;' in rv.data
    assert b'<strong>HTML</strong> allowed here' in rv.data
