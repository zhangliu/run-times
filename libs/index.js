function* runTimes(fun, times) {
  if ((typeof number !== 'number') || times <= 0) times = 5
  while (times--) {
    try {
      return yield fun()
    } catch (err) {
      if (!times) throw err
    }
  }
}

module.exports = {
  runTimes,
}
