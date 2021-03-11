# 2021-covid19countdown

**Live demo** https://ebuddj.github.io/2021-covid19countdown/

## Covid-19 restriction easing countdown template (EBU)

This template allows you to make a Covid-19 restriction easing countdown (or any multi countdown for that matter). You need to define the dates and the texts.

Data format is the following:

```
{
  "bgcolor":"rgb(253, 91, 42)",
  "datetime":"2021-03-03T00:00:00Z",
  "title_before":"Soda in the park, with one friend!",
  "desc_before":"more info…",
  "desc_before2":"even more info…",
  "title_after":"You can now have soda in the park, with one friend!",
  "desc_after":"more info…",
  "desc_after2":"even more info…"
}
```

By default the template expects 5 events, this can be modified in the code as needed.

* `datetime` is given in [ISO 8601](https://xkcd.com/1179/) format.
* `*_before` values are shown if `datetime` has not passed.
* `*_after` values are shown if `datetime` has passed.
* `bgcolor` can be given in any css accepted format.

Original idea by from [One Way Road To Beer](https://onewayroadtobeer.com/)

**Sources**
* []()

**EBU links**
* []()

**Used by**
* []()

## How to use

If you are interested in using the interactive version please contact Teemo Tebest, tebest@ebu.ch

This visualization is part of the EBU News Exchange’s Data Journalism project. Other projects are available: https://news-exchange.ebu.ch/data-journalism

## Rights of usage

The material may be used only by [Eurovision active members and sub-licensees](https://www.ebu.ch/eurovision-news/members-and-sublicensees).

## How to build and develop

This is a Webpack + React project.

* `npm install`
* `npm start`

Project should start at: http://localhost:8080

For developing please refer to `package.json`