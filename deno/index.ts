import "https://deno.land/x/dotenv/load.ts";
import { connect } from 'https://x.nest.land/hyper-connect@0.1.5/deno/mod.ts'

const hyper = connect(`${Deno.env.get('HYPER')}`)

console.log(
  await hyper.info.services()
)