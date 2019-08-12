---
layout: post
title:  "How to Install MySQL on Ubuntu"
date:   2019-04-16 23:44
categories: [Study Notes]
tags: [MySQL]
---
## 1. Open Terminal
Open terminal on Ubuntu.

## 2. Install MySQL Server on the System
Use the following command.
{% highlight bash %}
$ sudo apt-get update
$ sudo apt-get install mysql-server
{% endhighlight %}
Wait for the installation to finish.

## 3. Configure MySQL Server Before Launching
Use the following command.
{% highlight bash %}
$ sudo mysql_secure_installation
{% endhighlight %}
If the installation is successful, you should see the following message.
{% highlight bash %}
Securing the MySQL server deployment.
Connecting to MySQL using a blank password.
VALIDATE PASSWORD...
Press y|Y for Yes, any other key for No:
{% endhighlight %}
Enter No to bypass the VILADATE PASSWORD feature.
Then it asks you to type in new password and confirm it.
{% highlight bash %}
Remove anonymous users? (Press y|Y for Yes, any other key for No):
{% endhighlight %}
Type in `y` to remove the anonymous users.
{% highlight bash %}
Disallow root login remotely? (Press y|Y for Yes, any other key for No):
{% endhighlight %}
Type in `y` to remove the remotely root login.
{% highlight bash %}
Remove test database and access to it? (Press y|Y for Yes, any other key for No):
{% endhighlight %}
Type in `n` to keep the test database and access.
{% highlight bash %}
Reload privilege tables now? (Press y|Y for Yes, any other key for No):
{% endhighlight %}
Type in `y` to reload the privilege tables.

## 4. Check Status of MySQL Server
{% highlight bash %}
$ systemctl status mysql.service
{% endhighlight %}
If you do not see the output saying the server is active, use the following command to activate the server.
{% highlight bash %}
$ sudo systemctl start mysql
{% endhighlight %}

## 5. Reset the Root Password
If you got an error message when you tried to connect to the database, such as `Access denied for user 'root'@'localhost'`, you can reset the password for the root user.
Shut down the service.
{% highlight bash %}
$ sudo service mysql stop
{% endhighlight %}
Connect to MySQL without password.
{% highlight bash %}
$ mysqld_safe --skip-grant-tables --skip-networking &
{% endhighlight %}
Reset the password and change the auth plugin to mysql_native_password.
{% highlight bash %}
use mysql; 
UPDATE user SET authentication_string=PASSWORD("securepassword") where User='root'; 
UPDATE user SET plugin="mysql_native_password"; 
FLUSH PRIVILEGES; 
quit;
{% endhighlight %}
