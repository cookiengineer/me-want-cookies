
# Me Want Cookies!

This Web Extension is a Cookie Store export helper. A lot of websites on the internet
require session cookies and have mechanisms in place that won't let you download or
archive stuff for personal purposes.


This Extension exports all accessible cookies for the currently opened Tab into a
`cookie.jar` formatted file (Netscape HTTP cookies.txt file).

If you want to isolate the Cookies that you are exporting for the website, you
should use the following workflow:

- Go to `chrome://extensions` and enable the `Me Want Cookies!` Extension in Incognito Mode.
- Open Proprietary Website in a new Incognito Window.
- Login with your Account Credentials.
- Click on the `Me Want Cookies!` Extension Icon.
- Save the Textarea content to a `cookies.txt` file manually.

# Screenshot

![Screenshot](./screenshot.png)


## Common Issues

If your CLI tool of choice (e.g. `youtube-dl`) doesn't accept the exported `cookies.txt`
file, make sure that the comments in the headers are still inside the file; as a lot
of tools expect them to be there.


## Bugs

The Web Extension currently cannot save a file, as it will always lead to a `Network Error`
if you try to create a `<a href="data:text/plain..." download></a>` element and click on
it. As the Clipboard API is also deprecated and `navigator.clipboard` isn't supported in
the Web Extension context, the textarea must be copy/pasted manually.

