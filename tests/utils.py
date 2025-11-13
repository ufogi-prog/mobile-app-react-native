import logging

def configure_logging():
    logging.basicConfig(
        format='%(asctime)s - %(levelname)s - %(message)s',
        level=logging.INFO
    )

def get_logger(name):
    return logging.getLogger(name)

def get_env_variable(var_name, default):
    try:
        return os.environ[var_name]
    except KeyError:
        return default

import os