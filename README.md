
# Me Want Cookies!

This Web Extension is a Cookie Store export helper. A lot of websites on the internet
require session cookies and have mechanisms in place that won't let you download or
archive stuff for personal purposes.


## Usage

This Extension exports all Cookies that can be accessed by the current Tab (not only
the ones related to the active domain) into Netscape's `cookie.jar` (`cookies.txt`)
format that can be used by other CLI tools.

CLI tools that support this format are e.g. `curl`, `libaria`, `wget` or even higher
level tools, such as `instagram-scraper` or `youtube-dl`.

As a good workflow on how to "not leak" your other Cookies and only export the ones
that you really need for the current website, it is recommended to Open a new Tab
in Incognito Mode; and to activate only this Extension for it (and e.g. leave your
Ad Blockers active in Normal Mode):

- Go to `chrome://extensions`.
- Enable the `Me Want Cookies!` Extension in `Incognito Mode`.
- Open the Proprietary Website in a new Incognito Window.
- Login with your Account Credentials.
- Click on the `Me Want Cookies!` Extension Icon.
- Copy the Textarea content to a `cookies.txt` file manually.


## Screenshot

![Screenshot](./screenshot.png)


## Common Issues

If your python-based CLI tool of choice nags you with that it isn't a properly formatted
Netscape cookies file, it usually is a wrong assumption on their side that the leading
comments (starting with `# Netscape HTTP Cookie File`) have to exist there to be valid.

That's why this Extension will include those comments so that it's easier to paste and
forget about it.


## Bugs

Chrome's Web Extension API currently cannot save a file, as it will always lead to a
`Network Error` and the [chrome.downloads](https://developer.chrome.com/docs/extensions/reference/downloads)
API doesn't feature a use case where the File's Buffer contents can be set manually.

As Chrome's Web Extension context also doesn't support the [navigator.clipboard](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard)
API, the contents of the `textarea` have to be copied manually.


## License

This Web Extension is licensed under the [GNU AGPL 3.0](./AGPL-3.0.md) license.


## Sponsorship

If you like the work that I do and want me to continue working on things
like this; it would be awesome if you would sponsor this project:

https://github.com/sponsors/cookiengineer

