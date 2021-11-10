import { connect } from 'hyper-connect'

const hyper = connect(process.env['HYPER'])

export async function get() {
  return {
    body: await hyper.info.services()
  }
}