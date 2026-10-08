# Organic search measurement

Use Google Search Console (GSC) for Google Search visibility and clicks. Use GA4 to understand what visitors do after arriving. These measure different steps: a GSC click does not necessarily equal a GA4 session.

## Baseline and comparison

1. Confirm the verified GSC property covers the preferred site hostname and that GA4 is collecting data.
2. Save a baseline using the latest **28 complete days**. Compare it with the previous 28 days; once enough history exists, also compare with the same period last year to account for seasonality.
3. Record the date range, search type, country, device, filters and export date with each report. Use Google Search `Web` for the primary organic-search view.
4. Do not set numeric growth targets until the baseline and any seasonal pattern have been reviewed.

## KPIs

| KPI | Source and view | How to report |
| --- | --- | --- |
| Organic clicks | GSC → Performance → Search results → Pages and Queries | Record clicks, impressions, CTR and average position by page and query for the period. Keep the page and query exports so changes can be traced to specific landing pages and searches. |
| Non-brand impressions | GSC → Performance → Search results → Queries | Add a query filter using **Doesn’t match regex** for academy brand spellings, for example `mindsplash|mind splash|mind-splash`. Record impressions and clicks for the remaining query rows as a visible-query estimate; anonymized and truncated query rows mean this will not equal the property total. |
| Commercial rankings | GSC average position plus a local rank tracker | Track a fixed list of programme + location queries and the intended landing page. Report GSC average position as a trend; separately count tracked query/location/device combinations ranking in positions 1–10 in the rank tracker. |

### Suggested commercial query-to-page groups

- IB MYP tuition/coaching + Hyderabad → `/programs/ib-myp`
- IB DP tuition/coaching + Hyderabad → `/programs/ib-dp`
- IGCSE tuition/coaching + Hyderabad → `/programs/igcse`
- Olympiad classes/preparation + Hyderabad → `/programs/olympiads`
- SAT/PSAT preparation + Hyderabad → `/programs/exam-prep`
- Programme + Khajaguda, Kokapet or Financial District → the relevant `/branches/...` landing page

Include close wording variants such as “classes”, “coaching” and “tuition”. Keep this as a fixed tracked list and add new queries only when GSC shows relevant demand. Check that each query group is primarily bringing up its intended page.

## Interpreting “Top 10”

GSC average position is an average, not a guaranteed current rank for every searcher. It changes with query, device, location and result features. Use it to compare a page/query trend over time. For a top-10 KPI, use a rank tracker configured for the target search location and device, and report the number of tracked query-location combinations in positions 1–10. Keep the tracking settings consistent between reports.

For local phrases, GSC’s country/device filters do not provide a precise branch-radius ranking. Use a local rank tracker for Khajaguda, Kokapet and Financial District, and distinguish those rankings from GSC country-level performance.

## Monthly reporting template

- Period and comparison period:
- GSC property / search type / country / device:
- Organic clicks: total and change; top landing pages and queries:
- Non-brand impressions: filtered clicks, impressions, CTR and average position:
- Commercial queries in tracked positions 1–10: total, gained, lost, and target location:
- Pages with impressions but weak clicks or declining position:
- Actions taken and owner:

Review the results monthly. Use the quarterly content review to decide whether a page needs clearer intent, improved title/snippet, stronger internal links or a content refresh. Do not treat rankings or traffic as guaranteed outcomes.

## Reporting limitations

- Query filters exclude anonymized queries from the filtered report totals, and GSC may omit lower-priority query rows. Label the non-brand figure as a filtered estimate.
- GSC clicks and GA4 Organic Search sessions are different metrics and will not match exactly.
- GA4 attribution and lead events depend on the analytics property and implementation being correctly configured. Confirm event collection before using lead-event counts in a report.

## Google documentation

- [Search Console Performance report](https://support.google.com/webmasters/answer/7576553)
- [Search Console filtering and regex](https://support.google.com/webmasters/answer/17011165)
- [How Search Console defines clicks, impressions and average position](https://support.google.com/webmasters/answer/7042828)
- [GA4 default channel groups](https://support.google.com/analytics/answer/9756891)
