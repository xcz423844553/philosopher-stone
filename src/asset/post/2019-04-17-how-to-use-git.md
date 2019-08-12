---
layout: post
title:  "How to Use Git"
date:   2019-04-17 22:31
categories: [Study Notes]
tags: [Git]
---
## 1. Commit
{% highlight java %}
$ git commit
{% endhighlight %}

## 2. Git Branching
Create new branch and switch to the new branch.
{% highlight java %}
$ git branch new_branch_name
$ git checkout new_branch_name
{% endhighlight %}
These two commands can be combined.
{% highlight java %}
$ git checkout -b new_branch_name
{% endhighlight %}


## 3. Merge Branches
Merge the branch to master when the master branch is checked out.
{% highlight java %}
$ git merge new_branch_name
{% endhighlight %}

## 4. Rebase
Rebase the master branch to the most up-to-date branch.
{% highlight java %}
$ git rebase master
{% endhighlight %}

## 5. Create a branch locally and set the upstream on Github
{% highlight java %}
$ git checkout -b new_branch_name
$ git push --set-upstream origin new_branch_name
{% endhighlight %}

## 6. Delete the branch on Github from local terminal
{% highlight java %}
$ git push origin --delete new_branch_name
{% endhighlight %}

## 7. Push the changes to the master branch on Github
{% highlight java %}
$ git push origin local_branch_name:remote_branch_name
{% endhighlight %}
