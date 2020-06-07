# mysql
### 1、下载安装配置启动设置密码
```md
官网下载 
	`https://www.mysql.com/` => 
	`DOWNLOADS` => 
	`MySQL Community (GPL) Downloads »` => 
	`MySQL Community Server` => 
	`Windows (x86, 64-bit), ZIP Archive` => 
	`No thanks, just start my download`

解压到指定目录 例如：F:\Mysql
在MySQL目录下创建一个 my.ini 文件，文件的最后需要有一个空行
	[mysqld]
	# 设置3306端口
	port=3306
	# 设置MySQL的安装目录
	basedir=F:\Mysql\mysql-8.0.20-winx64
	# 设置MySQL数据库的数据的存储目录
	datadir=F:\Mysql\mysql-8.0.20-winx64\data
	# 允许最大连接数
	max_connections=200
	# 允许连接失败的次数，这是为了防止有人从该主机视图攻击数据库系统
	max_connect_errors=0
	# 服务端使用的字符集默认为UTF8
	character-set-server=utf8
	# 创建新表时将使用的默认存储引擎
	default-storage-engine=INNODB
	# 默认使用“mysql_native_password”插件认证
	default_authentication_plugin=mysql_native_password
	
	[mysql]
	# 设置MySQL客户端默认字符集
	default-character-set=utf8
	[client]
	# 设置MySQL客户端连接服务端时默认使用的端口
	port=3306
	default-character-set=utf8
	
在环境变量里面加上MySQL路径 F:\Mysql\mysql-8.0.20-winx64\bin
进入命令指示符(cmd)
	mysqld --initialize-insecure --user=mysql
	mysqld -install 
		如果出现以下信息 Install/Remove of the Service Denied
		打开cmd.exe程序的时候选择`用管理员身份打开`，再执行 mysqld -install
启动数据库 net start mysql
进入数据库 mysql -u root -p 不用输入输入密码直接回车
设置密码 alter user user() identified by "密码";
退出数据库 quit
关闭数据库 net stop mysql
```
### 2、相关指令
```md
查看所有数据库
	show DATABASES
创建并且使用数据库
	create database `数据库名称` charset utf8;
	use `数据库名称`;
删除数据库
	drop database if exists `数据库名称`;
导入外部SQL文件
	mysql -u root -p < sql.sql
	source sql.sql
创建数据表
	create table class (id int primary key auto_increment);
```