# user-message-border

A Claude Code mod that draws your own prompts in the transcript inside a
rounded lavender border, so they stand out from the assistant's replies.
Messages from background tasks, other agents and other sessions are left as
they are. To change the color or padding, edit `hooks/register.tsx`.

## Install

At the prompt of a terminal session:

    /plugin install user-message-border --marketplace ekadetov/user-message-border

From a shell:

    claude plugin install user-message-border --marketplace ekadetov/user-message-border

The repository is private: the machine needs a git credential for github.com
(for example `gh auth login`, then `gh auth setup-git`).
