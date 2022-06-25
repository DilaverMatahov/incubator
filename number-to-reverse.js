function digitize(n) {
    const str = n.toString()
      const intConverter = (item) => parseInt(item)
      return Array.from([...str].reverse(), intConverter)
  }