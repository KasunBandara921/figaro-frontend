# Installation & Setup Guide

## Prerequisites

Before you start, ensure you have the following installed:

### Node.js & npm
1. Download from [nodejs.org](https://nodejs.org/)
2. Choose the **LTS (Long Term Support)** version
3. Install it and verify:
```bash
node --version  # Should show v18 or higher
npm --version   # Should show 9 or higher
```

---

## Step-by-Step Installation

### Step 1: Open Terminal/Command Prompt

**Windows Users:**
- Open `Command Prompt` or `PowerShell`
- Or use VS Code's integrated terminal

**Mac/Linux Users:**
- Open `Terminal`
- Or use VS Code's integrated terminal

### Step 2: Navigate to Project Folder

```bash
# Change to the next-salon directory
cd path/to/next-salon

# For example on Windows:
cd C:\Users\banda\Downloads\figaro_salon.webflow.io\next-salon

# Or on Mac:
cd ~/Downloads/figaro_salon.webflow.io/next-salon
```

### Step 3: Install Dependencies

```bash
npm install
```

This will:
- Read `package.json`
- Download all required packages
- Create a `node_modules/` folder
- Generate a `package-lock.json` file

⏱️ **Note**: This may take 2-5 minutes depending on your internet speed.

### Step 4: Verify Installation

```bash
npm list
```

You should see a list of installed packages without errors.

---

## Running the Development Server

### Start Development Mode

```bash
npm run dev
```

You'll see output like:
```
> next dev

  ▲ Next.js 14.0.0
  - Local:        http://localhost:3000
  - Environments: .env.local

Ready in 2.3s
```

### Open in Browser

Click the link `http://localhost:3000` or paste it in your browser.

### Making Changes

The site will automatically refresh when you save files. Try:
1. Edit `src/components/Hero.tsx`
2. Change the heading text
3. Save the file
4. Check your browser - it updates instantly! ✨

### Stop Development Server

Press `Ctrl + C` (or `Cmd + C` on Mac) in the terminal.

---

## Project Structure Reference

```
next-salon/
│
├── src/                          ← All source code here
│   ├── app/
│   │   ├── layout.tsx           ← Main layout wrapper
│   │   ├── page.tsx             ← Home page (/)
│   │   ├── globals.css          ← Global styles
│   │   └── favicon.ico          ← Browser tab icon
│   │
│   └── components/              ← Reusable React components
│       ├── Navbar.tsx           ← Top navigation
│       ├── Hero.tsx             ← Hero section
│       ├── About.tsx            ← About section
│       ├── Services.tsx         ← Services section
│       ├── Locations.tsx        ← Locations section
│       └── Footer.tsx           ← Footer section
│
├── public/                       ← Static files (images, etc.)
│
├── package.json                  ← Project dependencies & scripts
├── tsconfig.json                 ← TypeScript configuration
├── tailwind.config.ts            ← Tailwind CSS configuration
├── next.config.js                ← Next.js configuration
├── postcss.config.js             ← PostCSS configuration
├── .eslintrc.json                ← ESLint configuration
├── .gitignore                    ← Files to ignore in git
│
├── README.md                     ← Full documentation
├── QUICK_START.md                ← Quick start guide
├── CONVERSION_SUMMARY.md         ← Conversion details
└── SETUP.md                      ← This file

```

---

## Available npm Commands

### Development
```bash
npm run dev
```
Starts development server with hot reload.

### Build for Production
```bash
npm run build
```
Creates optimized production build.

### Run Production Build
```bash
npm start
```
Starts the production server (requires `build` first).

### Check Code Quality
```bash
npm run lint
```
Runs ESLint to check for code issues.

---

## Troubleshooting

### Issue: "npm command not found"
**Solution**: Node.js/npm is not installed properly.
- Reinstall Node.js from [nodejs.org](https://nodejs.org/)
- Restart your terminal after installation
- Run `node --version` to verify

### Issue: "Cannot find module" errors
**Solution**: Dependencies not installed.
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: Port 3000 already in use
**Solution**: Use a different port:
```bash
npm run dev -- -p 3001
# Now open http://localhost:3001
```

### Issue: Changes not appearing
**Solution**: 
1. Save the file (Ctrl+S / Cmd+S)
2. Check the terminal for build errors
3. Refresh the browser (Ctrl+R / Cmd+R)
4. Clear browser cache if needed

### Issue: TypeScript errors in VS Code
**Solution**: 
1. Close VS Code
2. Run `npm install` again
3. Reopen VS Code
4. Wait for TypeScript to index files

---

## Development Tips

### Using VS Code

1. **Install ES7+ React/Redux/React-Native snippets** extension for faster coding
2. **Use the Integrated Terminal** (View → Terminal)
3. **Install Tailwind CSS IntelliSense** for autocomplete

### Code Formatting

The project is configured with ESLint. To format code:
```bash
npm run lint
```

### Viewing Network Requests

Open browser DevTools (F12):
1. Go to **Network** tab
2. Reload the page (Ctrl+R)
3. See all loaded resources

---

## Next: Customization

Once your development server is running, you can:

1. **Edit Text Content**
   - Open any component file
   - Change the text directly

2. **Change Colors**
   - Edit `tailwind.config.ts`
   - Modify Tailwind classes in components

3. **Add Images**
   - Save images to `public/` folder
   - Use in components with `<Image>` tag

4. **Add New Pages**
   - Create `src/app/new-page/page.tsx`
   - Add your content

---

## Deployment Checklist

Before deploying:

- [ ] Run `npm run build` successfully
- [ ] Test site locally with `npm start`
- [ ] Check all links work
- [ ] Test on mobile devices
- [ ] Update content/images
- [ ] Update meta tags and SEO
- [ ] Set up analytics (Google Analytics)
- [ ] Test performance with DevTools

---

## Quick Reference

| Task | Command |
|------|---------|
| Install dependencies | `npm install` |
| Start dev server | `npm run dev` |
| Build for production | `npm run build` |
| Run production build | `npm start` |
| Check code quality | `npm run lint` |
| Stop dev server | `Ctrl + C` |

---

## Getting Help

- 📖 Read `README.md` for detailed docs
- 🚀 Check `QUICK_START.md` for quick reference
- 📊 See `CONVERSION_SUMMARY.md` for project overview
- 🔗 Visit [nextjs.org/docs](https://nextjs.org/docs)
- 💬 Ask in [Next.js Discord](https://discord.gg/nextjs)

---

## You're Ready! 🎉

```bash
cd next-salon
npm install
npm run dev
```

Then open http://localhost:3000 in your browser!

Happy coding! 🚀
