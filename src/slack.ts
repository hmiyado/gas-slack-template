namespace Slack {
  const webhook = Secrets.SLACK_INCOMING_WEBHOOK;

  export const post = (text: string) => {
    const body = {
      text,
    };
    const options: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
      method: "post",
      payload: `payload=${JSON.stringify(body)}`,
    };

    UrlFetchApp.fetch(webhook, options);
  };
}
