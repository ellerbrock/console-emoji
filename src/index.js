'use strict'

import 'colors'
import emoji from 'node-emoji'

export default function log (msg, type) {
  if (!msg) return false

  const status = {
    'ok': `:white_check_mark:  ${msg}`.bold.green,
    'warn': `:warning:  ${msg}`.bold.yellow,
    'err': `:x:  ${msg}`.bold.red,
    'red': msg.bold.red,
    'yellow': msg.bold.yellow,
    'green': msg.bold.green
  }

  if (type && status[ type ]) msg = status[ type ]
  console.log(emoji.emojify(msg))
  return true
}
