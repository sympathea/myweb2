<h1 align="center">zephyrlin.me</h1>

<p align="center">一个适合开发者的个人网站</p>

<p align="center">
  <img src="https://img.shields.io/badge/License-MIT-orange"/>
  <img src="https://img.shields.io/badge/PRs-Welcome-brightgreen"/>
  <img src="https://img.shields.io/badge/Powered%20by-React-blue"/>
</p>

![home page picture](./public/images/home.png)

## ⚙️ 技术栈

- 框架：**React + Next.js**
- 样式：**Tailwind CSS** + **Shadcn UI**
- 动画：**Framer Motion**
- 数据库：**Supabase**
- ORM：**Prisma**
- 内容管理系统：**Sanity**
- 认证：**Clerk**
- 部署：**Vercel**

## 💡快速开始

### 环境要求

- [Node.js 18.18](https://nodejs.org/) 或更高版本。

### 克隆仓库

```bash
git clone https://github.com/eurooooo/zephyrlin.me.git
cd zephyrlin.me
```

### 安装依赖:

```bash
npm install
```

### 配置 .env 文件

在项目根目录下创建一个 .env 文件，内容如下：

```
# clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# supabase
DATABASE_URL=
DIRECT_URL=

# sanity
NEXT_PUBLIC_SANITY_ID=
```

现在我们需要设置所有的环境变量。

#### Clerk

1. 前往 [Clerk官网](https://clerk.com/) 并创建一个应用程序。选择 Google 和 GitHub 作为登录选项：
   ![clerk1](./public/images/clerk1.png)
2. 复制环境变量并粘贴到 .env 文件中：
   ![clerk2](./public/images/clerk2.png)

#### Supabase

1. 前往 [Supabase官网](https://supabase.com/)，创建一个新项目。**重要提示**：将密码存储在某个地方，因为在第 3 步中会用到。等待几分钟，让Supabase设置项目。
   ![supabase2](./public/images/supabase1.png)
2. 点击右上角的 "connect"，选择 ORMs：
   ![supabase3](./public/images/supabase2.png)
3. 复制环境变量并粘贴到 .env 文件中。将密码占位符替换为第 1 步中存储的密码。

4. 在终端中运行以下命令：

```bash
npx prisma db push
```

#### Sanity

1. 在终端中运行以下命令，可以将 "zephyrlin.me" 替换为其他名称。

```bash
npm create sanity@latest -- --template clean --create-project "zephyrlin.me" --dataset production  --output-path sanity
```

2. 系统可能会要求登录。登录后，按照指引操作：
   ![sanity1](./public/images/sanity1.png)

3. 进入 /sanity/schemaTypes 文件夹，将以下代码粘贴到 index.js 文件中：

```javascript
import { projectsType } from "./project";

export const schemaTypes = [projectsType];
```

在同一文件夹下，新增一个名为 project.js 的文件：

```javascript
import { defineField, defineType } from "sanity";

export const projectsType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      type: "image",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "link",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tags",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
});
```

4. 前往 [Sanity官网](https://www.sanity.io/manage) 获取project id，并将其赋值给 .env 文件中的 NEXT_PUBLIC_SANITY_ID。
   ![sanity2](./public/images/sanity2.png)
5. 在终端中运行以下命令：

```bash
cd sanity
npm run dev
```

6. 打开 [localhost:3333](http://localhost:3333)，现在可以向网站添加项目了。

### 启动服务器

🎉 恭喜！现在我们可以启动网站了：

```bash
npm run dev
```

在浏览器中访问 [localhost:3000](http://localhost:3000)，查看网站效果。

## 致谢

网站参考了[cali.so](https://cali.so/)的设计。
