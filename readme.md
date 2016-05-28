This custom Kirby field allows you to clone a page in the panel.

**Note: this field is in alpha state and just a proof of concept.**

## Installation

Put the field into `/site/fields`; create the folder if it does not exist yet.

## In your blueprint

```
fields:
  clone:
    type: clone
```

It's best to put this field before any other fields. The field does not have any options.

This will create a button in your Panel form.

## Use

1. Click on the "Clone Page" button => an input field is shown.
2. Enter the title of the new page into the input field and press `ENTER`.
3. If all is well and the page does not exist yet, the new page is created.

## Limitations

- If you are on a multi-lingual installation, the field is only shown in the default language. It does, however, create a page in every available language.
- No field translations available.


## Author

Sonja Broda info@texniq.de

## Feedback/issues

Pls. create an issue.