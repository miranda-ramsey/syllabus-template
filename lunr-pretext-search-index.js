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
  "id": "sec-instructor",
  "level": "1",
  "url": "sec-instructor.html",
  "type": "Section",
  "number": "2",
  "title": "Instructor Information",
  "body": " Instructor Information      Instructor  your.email@pcc.edu    Phone  971-722-xxxx    Office Location  Building XXX    School Address  Portland Community College, 12000 SW 49th Ave., Portland, OR 97219       About Me  Write about yourself :)    Schedule   Term Schedule           Class  CRN  Days  Time  Place  Midterm  Final    MTH 111  20518  MW  9:00 11:50  LIBR 216  Wed 4\/30  Mon 6\/9    MTH 20  25135  MW  2:00 4:20  SCOM 320  Wed 4\/30  Wed 6\/11      Office Hours           Class  CRN  Days  Time  Place  Midterm  Final    MTH 111  20518  MW  9:00 11:50  LIBR 216  Wed 4\/30  Mon 6\/9    MTH 20  25135  MW  2:00 4:20  SCOM 320  Wed 4\/30  Wed 6\/11      "
},
{
  "id": "sec-instructor-4-2",
  "level": "2",
  "url": "sec-instructor.html#sec-instructor-4-2",
  "type": "Table",
  "number": "2.1",
  "title": "Term Schedule",
  "body": " Term Schedule           Class  CRN  Days  Time  Place  Midterm  Final    MTH 111  20518  MW  9:00 11:50  LIBR 216  Wed 4\/30  Mon 6\/9    MTH 20  25135  MW  2:00 4:20  SCOM 320  Wed 4\/30  Wed 6\/11    "
},
{
  "id": "sec-instructor-4-3",
  "level": "2",
  "url": "sec-instructor.html#sec-instructor-4-3",
  "type": "Table",
  "number": "2.2",
  "title": "Office Hours",
  "body": " Office Hours           Class  CRN  Days  Time  Place  Midterm  Final    MTH 111  20518  MW  9:00 11:50  LIBR 216  Wed 4\/30  Mon 6\/9    MTH 20  25135  MW  2:00 4:20  SCOM 320  Wed 4\/30  Wed 6\/11    "
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
