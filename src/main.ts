class SlackClient {
  webhook = Secrets.SLACK_INCOMING_WEBHOOK

  post() {
    const body = {
      text: 'Hello, GAS!'
    }
    const options: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
      method: 'post',
      payload: `payload=${JSON.stringify(body)}`
    };

    UrlFetchApp.fetch(this.webhook, options)
  }
}

function main() {
  (new SlackClient()).post()
}
