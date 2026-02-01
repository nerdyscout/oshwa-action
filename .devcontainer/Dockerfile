FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-18

# Install additional system packages if needed
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends \
    curl \
    wget \
    jq \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Set up GitHub CLI authentication helper
RUN git config --global credential.helper '!gh auth git-credential'