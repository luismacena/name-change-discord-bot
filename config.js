const config = {
    NODE_ENV = 'development',
    BOT_TOKEN = 'NzI5MDk4OTk0MDg0NjEwMTcz.XwEBsQ.so7MXgMqgkM5QKWX-8eqa6sQuQc',
    BOT_MESSAGE = 'THE NEW ERA IS COMMING!',
    BOT_COMMAND = '!nchange',
    RANDOM_NAMES = true
} = process.env

module.exports = {
    NODE_ENV,
    BOT_TOKEN,
    BOT_MESSAGE,
    BOT_COMMAND,
    RANDOM_NAMES
}