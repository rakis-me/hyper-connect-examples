const { connect } = require('hyper-connect')

const hyper = connect(`${process.env.HYPER}`)

async function main() {
  const result = await hyper.info.services()
  console.log(result)
}

main()