from setuptools import setup

setup(
    name='TIVY_mat',
    packages=['TIVY_mat'],
    include_package_data=True,
    install_requires=[
        'TIVY_mat',
    ],
    setup_requires=[
        'pytest-runner',
    ],
    tests_require=[
        'pytest',
    ],
)
