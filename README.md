# coderhub API

**coderhub API** —— 基于 **NodeJS** 和 **MySQL** 开发的社交平台接口, 采用 **REST** 设计风格, 主要使用 **TypeScript** 来开发。

## 使用

**项目环境:** 

* NodeJS
* MySQL

**接口设计风格:**

* REST

**进入 coderhub 文件后执行如下操作:**

1. 安装 pnpm

```shell
npm install pnpm -g
```

2. 安装依赖

```shell
pnpm install
```

3. 启动服务

```shell
pnpm start
```

4. 运行SQL文件

创建 coderhub 数据库, 运行 coderhub数据库.sql  文件。

5. 配置 .env 文件


在此文件填写你电脑上的 MySQL 配置信息...


**获取数据**

默认在 http://localhost:8888 启动服务。

例如:

获取全部动态

```HTTP
GET /moments
```

获取某一条动态

```HTTP
GET /moments/:momentId
```

详情请看 src/router 里面的文件。
