const countCovidStatus = (covidStatusArray) => {
    let covidStatusCount = {
        "negative and low risk": 0,
        positive: 0,
        "negative and high risk": 0
    }

    if (covidStatusArray === null || covidStatusArray === undefined) {
        return undefined
    }
    if (covidStatusArray.length === 0) {
        return {}
    }

    for (const status of covidStatusArray) {
        if (status === "positive") {
            covidStatusCount.positive++
        } else if (status === "negative and low risk") {
            covidStatusCount["negative and low risk"]++
        } else if (status === "negative and high risk") {
            covidStatusCount["negative and high risk"]++
        }
    }

    let result = {}
    for (const key in covidStatusCount) {
        if (covidStatusCount[key] !== 0) {
            result[key] = covidStatusCount[key]
        }
    }
    return result
}

console.log(
    countCovidStatus([
      'negative and low risk',
      'positive',
      'negative and low risk',
      'negative and high risk',
      'positive',
      'negative and low risk'  ])
  )
  console.log(countCovidStatus(['positive', 'negative and low risk', 'positive']))
  console.log(
    countCovidStatus([
      'negative and low risk',
      'positive',
      'negative and low risk',
      'abnormal',
      'negative and high risk',
      'positive',
      ' normal'  ])
  )
  console.log(countCovidStatus(['covid']))
  console.log(countCovidStatus([]))
  console.log(countCovidStatus(null))
  console.log(countCovidStatus(undefined))