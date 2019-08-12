---
layout: post
title:  "How to Install Github on Ubuntu"
date:   2019-04-16 23:17
categories: [Study Notes]
tags: [Github]
---
## 1. Create a Github Account
Go to `github.com` and create an account.

## 2. Install Git on the System
Open terminal on Ubuntu.
Use the following command.
{% highlight java %}
$ sudo apt-get update
$ sudo apt-get install git-core git-gui git-doc
{% endhighlight %}

## 3. Set up HTTP Connection
Use the following command to set the username and email for your Github account.
{% highlight java %}
$ git config --global user.name "your_username"
$ git config --global user.email "your_email@domain.com"
{% endhighlight %}
Create a directory named `git_repo` at `/home/your_ubuntu_username`.
{% highlight java %}
$ mkdir /home/your_ubuntu_username/git_repo
$ cd /home/your_ubuntu_username/git_repo
{% endhighlight %}
Create an empty git.
{% highlight java %}
$ git init
{% endhighlight %}
Clone the repository.
{% highlight java %}
$ git clone https://github.com/your_username/your_repository_name
{% endhighlight %}

## 4. Set up SSH Connection
I have not tried SSH connection on my ubuntu virtual machine. Just google it when you need to use it. I will update this section when I actually use it in the future.