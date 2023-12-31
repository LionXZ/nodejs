const shell = require('shelljs')

function getLog() {
    let _cmd = `git log -1 \
  --date=iso --pretty=format:'{"commit": "%h","author": "%aN <%aE>","date": "%ad","message": "%s"},' \
  $@ | \
  perl -pe 'BEGIN{print "["}; END{print "]\n"}' | \
  perl -pe 's/},]/}]/'`
    return new Promise((resolve, reject) => {
        shell.exec(_cmd, (code, stdout, stderr) => {
            if (code) {
                reject(stderr)
            } else {
                resolve(JSON.parse(stdout)[0])
            }
        })
    })
}

async function commit() {
    let _gitLog = await getLog()
    console.log(_gitLog)
}

commit();