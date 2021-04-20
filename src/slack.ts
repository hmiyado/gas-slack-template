// eslint-disable-next-line @typescript-eslint/no-unused-vars
namespace Slack {
  const webhook = Secrets.SLACK_INCOMING_WEBHOOK

  export const post = (text: string): void => {
    const body = {
      text,
    }
    const options: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
      method: 'post',
      payload: `payload=${JSON.stringify(body)}`,
    }

    UrlFetchApp.fetch(webhook, options)
  }
}
