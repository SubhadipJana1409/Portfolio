# 🚀 Sanity Studio Setup & Launch Guide

## **How to Open Sanity Studio (http://localhost:3334)**

### **Step 1: Navigate to Sanity Studio Directory**

```bash
cd sanity-studio
```

### **Step 2: Start Sanity Studio**

```bash
npm run dev
```

_(This runs `sanity dev` internally)_

### **Step 3: Open in Browser**

Once you see the startup confirmation, visit:
**http://localhost:3334**

---

## **Authentication Required**

The first time you open Sanity Studio, you may need to authenticate:

- Click "Accept" when prompted for authentication
- Grant Studio access to your Sanity project
- Use these credentials if prompted:
  ```
  Project ID: 18tiebeg
  Dataset: production
  ```

---

## **Available Commands**

From the `sanity-studio` directory:

| Command          | Purpose                                              |
| ---------------- | ---------------------------------------------------- |
| `npm run dev`    | **Start development server** (http://localhost:3334) |
| `npm start`      | Start production build locally                       |
| `npm run build`  | Build for deployment                                 |
| `npm run deploy` | Deploy to Sanity hosting                             |

---

## **What You'll Find in Sanity Studio:**

### **📊 Content Management Dashboard**

- **Skills** - Edit your 17 technical skills
- **Experiences** - Manage your 7 career entries
- **Milestones** - Update your 19 timeline achievements
- **Projects** - Modify your 5 research projects
- **Scholarships** - Edit your award history
- **Volunteer** - Manage community activities

### **🎯 Quick Content Updates:**

1. Navigate to desired content type
2. Click on any item to edit
3. Modify fields (title, description, dates, etc.)
4. **Click "Publish"** -> changes appear instantly in your portfolio!

---

## **Troubleshooting**

### **Port 3334 Already in Use:**

- Close other processes using the port
- Or run: `npm run dev -- --port 3335`

### **Authentication Issues:**

- Make sure your Sanity tokens are configured
- Check `sanity.config.ts` for correct project settings

### **Studio Won't Load:**

- Ensure `npm install` completed successfully in sanity-studio folder
- Clear browser cache and reload
- Check console for JavaScript errors

---

## **🎉 Ready to Edit Content!**

Your **Sanity-powered portfolio** is content-managed forever!

**Pro Tip:** Instead of editing HTML files manually, just update content in Sanity Studio - your portfolio stays perfect while you focus on what matters!
