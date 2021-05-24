#!/usr/bin/env node

let secs = process.argv[2]

const to_string = (secs) => {
    let hours = Math.floor(secs / 3600)
    let minutes = Math.floor((secs % 3600) / 60)
    let seconds = Math.floor(secs % 60)

    let str = 'Countdown: '
    if (hours > 0) str += `${hours}h `
    if (minutes > 0) str += `${minutes}m `
    str += `${seconds}s`

    return str
}

const countdown = () => {
    process.stdout.write(`\r\x1b[K${to_string(secs--)}`)
    if (secs > 0) {
        setTimeout(countdown, 1000);
    } else {
        process.stdout.write('\n')
    }
}

countdown()