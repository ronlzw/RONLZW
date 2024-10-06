/*
[rewrite_local]
^https:\/\/us-central1-core-runloop\.cloudfunctions\.net\/verifyReceipt url script-response-body ../Profiles/seconds.snippet

[mitm]
hostname = us-central1-core-runloop.cloudfunctions.net
*/
var TreeNewBee = JSON.parse($response.body);

TreeNewBee = {
  result: {
    products: [
      {
        receipt: {
          receipt_type: "Production",
          app_item_id: 475816966,
          receipt_creation_date: "2024-09-30 04:25:48 Etc/GMT",
          bundle_id: "com.runloop.seconds.free",
          original_purchase_date: "2024-09-30 04:24:32 Etc/GMT",
          in_app: [
            {
              quantity: "1",
              purchase_date_ms: "1650524668000",
              expires_date: "2029-04-24 07:04:28 Etc/GMT",
              expires_date_pst: "2029-04-24 00:04:28 America/Los_Angeles",
              is_in_intro_offer_period: "false",
              transaction_id: "220001221969591",
              is_trial_period: "true",
              original_transaction_id: "220001221969591",
              purchase_date: "2022-04-21 07:04:28 Etc/GMT",
              product_id: "com.runloop.seconds.free.discount0",
              original_purchase_date_pst: "2022-04-21 00:04:29 America/Los_Angeles",
              in_app_ownership_type: "PURCHASED",
              original_purchase_date_ms: "1650524669000",
              web_order_line_item_id: "220000536094382",
              expires_date_ms: "2650783868000",
              purchase_date_pst: "2022-04-21 00:04:28 America/Los_Angeles",
              original_purchase_date: "2022-04-21 07:04:29 Etc/GMT"
            }
          ],
          adam_id: 475816966,
          receipt_creation_date_pst: "2024-09-29 21:25:48 America/Los_Angeles",
          request_date: "2024-09-30 04:26:54 Etc/GMT",
          request_date_pst: "2024-09-29 21:26:54 America/Los_Angeles",
          version_external_identifier: 855479028,
          request_date_ms: "1727670414234",
          original_purchase_date_pst: "2024-09-29 21:24:32 America/Los_Angeles",
          application_version: "424",
          original_purchase_date_ms: "1727670272000",
          receipt_creation_date_ms: "1727670348000",
          original_application_version: "424",
          download_id: 503861625439440900
        },
        latest_receipt_info: {
          quantity: "1",
          purchase_date_ms: "1650524668000",
          expires_date: "2029-04-24 07:04:28 Etc/GMT",
          expires_date_pst: "2029-04-24 00:04:28 America/Los_Angeles",
          is_in_intro_offer_period: "false",
          transaction_id: "220001221969591",
          expires_date_formatted: "2029-04-24 07:04:28 Etc/GMT",
          is_trial_period: "true",
          original_transaction_id: "220001221969591",
          purchase_date: "2022-04-21 07:04:28 Etc/GMT",
          product_id: "com.runloop.seconds.free.discount0",
          original_purchase_date_pst: "2022-04-21 00:04:29 America/Los_Angeles",
          in_app_ownership_type: "PURCHASED",
          subscription_group_identifier: "20421642",
          original_purchase_date_ms: "1650524669000",
          web_order_line_item_id: "220000536094382",
          expires_date_ms: "2650783868000",
          purchase_date_pst: "2022-04-21 00:04:28 America/Los_Angeles",
          original_purchase_date: "2022-04-21 07:04:29 Etc/GMT"
        },
        latest_receipt:
          "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",
        id: "com.runloop.seconds.free.discount0",
        verifiedAt: {
          _nanoseconds: 283000000,
          _seconds: 1727670414
        },
        purchasedAt: {
          _nanoseconds: 0,
          _seconds: 1727670272
        }
      }
    ]
  }
};

$done({ body: JSON.stringify(TreeNewBee) });
