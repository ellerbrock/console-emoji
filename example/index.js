import log from '../src/index'

// log without colors and emojis
log('normal log ...')

// log with color and emojis
log('success ...', 'ok')
log('warning ...', 'warn')
log('error ...', 'err')

// text with emojis
log(':sparkles: :star: :star:  :dizzy:  emojis  :two_hearts: :sparkling_heart: :revolving_hearts:')
log('damn error :rage:', 'err')

// color text
log('just some red text', 'red')
log('yellow text ...', 'yellow')
log('green text with a kitten :smile_cat:', 'green')