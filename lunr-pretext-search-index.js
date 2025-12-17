var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter",
  "level": "1",
  "url": "frontmatter.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "  You Your department Your institution      My Website   copyright         "
},
{
  "id": "sec-course-information",
  "level": "1",
  "url": "sec-course-information.html",
  "type": "Section",
  "number": "1",
  "title": "Course Information",
  "body": " Course Information      Course Title  Insert Course Title Here    Course Number  MTHXX    CRN  00000    Credits  0    Term and Year  Winter 2026    Prerequisites  MTH YY and ...    Class Meetings and Times  Mondays and Wednesdays 9:00AM - 11:50AM    Modality\/Location  In Person, SCOM 314, Southeast Campus       Course Description  Type your course description here. Course descriptions can be found at    Learning Outcomes  In this class, you will learn...  Outcome 1  Outcome 2      "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
