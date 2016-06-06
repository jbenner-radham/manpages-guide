Basics of Manpage Authoring With Mdoc
=====================================
In this section we'll learn some brief history on manpages as well as the basics of mdoc,
the markup language used by `mandoc` for manpage authoring.

Mandoc
------
Designed as a successor to the `roff`, `groff`, `nroff` and `troff` typesetting applications but
with a specific focus on manpages. It utilizes the **mdoc** markup language to compose manpages.
It can also produce documents in HTML, text (ASCII and UTF-8), PDF, man and PostScript.

A Minimal Mdoc Document
-----------------------
Here we'll be going over the structure of a minimal mdoc manual as seen below.

```mdoc
.Dd June 5, 2016
.Dt MAN-MINIMAL 1
.Os
.\"
.Sh NAME
.Nm Hello, world!
.Nd A salutation.
```

The first line represents the date of authorship with the `.Dd` macro using the format: _month day, year_.

```mdoc
.Dd June 5, 2016
```

The second line represents the document title using the `.Dt` macro, with the manual section (we'll discuss this more later) provided as the second argument.

```mdoc
.Dt MAN-MINIMAL 1
```

The third line simply displays the operating system version in the document footer via the `.Os` macro.

```mdoc
.Os
```

The fourth line is present merely for aesthetics and is non-essential however we'll cover it here for completeness.
This is merely an empty "comment" line. We'll discuss this more later as well.

```mdoc
.\"
```

The fifth line represents the &ldquo;NAME&rdquo; section header using the `.Sh` macro.

```mdoc
.Sh NAME
```

The sixth line is the name of the manpage, specified by the `.Nm` macro.

```mdoc
.Nm Hello, world!
```

The seventh and final line of our document is a description of the manual's content using the `.Nd` macro.

```mdoc
.Nd A salutation.
```
