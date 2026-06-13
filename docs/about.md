# About

This table is created and maintained by the maintainer of [basedpyright](https://docs.basedpyright.com).

When I forked pyright in 2023, it was the best python type checker and language server at the time, but it was deliberately was held back by microsoft
and their desire to lock as many people into VSCode as possible. I created basedpyright because the state of python type checkers and language servers was totally unacceptable to me as a user, and if I was going to
be forced to use this language, I had to fix the problem myself.

Fast-forward a few years:

- There are now two new type checkers in development, which are much faster than pyright and mypy -- and by maintainers who actually listen to feedback
  from their users
- [Pyright has lost its primary maintainer](https://github.com/microsoft/pyright/discussions/11250#discussioncomment-15619981)
- I now have other projects taking up my time

With all this in mind, it seems inevitable to me that projects using (based)pyright will eventually need to migrate to one of the new type checkers.
This table is my attempt to monitor how well each type checker covers the functionality of basedpyright, and to help both myself and others decide which
type checker to switch to, when the time comes.

## FAQ

### Are you still going to maintain basedpyright?

Yes, for the forseeable future. At least for as long as I believe there's still a need for it.

### Which of the new type checkers do you currently recommend?

As of writing this, neither of them seem to have all the features from basedpyright that I rely on. Pyrefly has
[experimental baseline support](https://pyrefly.org/en/docs/error-suppressions/#baseline-files-experimental) inspired by basedpyright which is pretty cool,
but it's [not](https://github.com/facebook/pyrefly/issues/3441) [there](https://github.com/facebook/pyrefly/issues/3609) yet.

Ty seems to be trying to fix some of the fundamental issues with the type system,
[with the `ty_extensions` module](https://docs.astral.sh/ty/features/type-system/#intersection-types), which is really cool.

Unfortunately Pyrefly is run by [facebook](https://www.forbes.com/sites/kashmirhill/2014/06/28/facebook-manipulated-689003-users-emotions-for-science/),
and ty is now run by [OpenAI](https://www.youtube.com/watch?v=-MUEXGaxFDA), so I'm hoping they don't rugpull like microsoft did with their language server.
What was your question again?

### I found a mistake in the table, or a missing rule

Make a PR

### Mypy?

I haven't touched mypy in many years. None of my projects use it anymore, so there's no motivation for me to add it to the table. I would accept a PR though.

### What else are you working on?

A lot of my time nowadays is spent working on [Rebased](https://github.com/DetachHead/rebased) - a git GUI client based on IntelliJ's git integration
