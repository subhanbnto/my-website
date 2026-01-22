# Deployment Guide

This guide will help you deploy both the frontend (Netlify) and backend (separate hosting) for your portfolio website.

## Current Setup

- ✅ **Frontend**: Deployed on Netlify
- ❌ **Backend**: Needs separate deployment

## Backend Deployment Options

### Option 1: Railway (Recommended - Free & Easy)

Railway is the easiest option for deploying Node.js backends.

#### Steps:

1. **Sign up at Railway**
   - Go to: https://railway.app
   - Sign up with GitHub

2. **Create New Project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your `my-website` repository
   - Select "Add Service" → "Empty Service"

3. **Configure the Service**
   - Click on the service
   - Go to "Settings"
   - Set the root directory to: `server`
   - Set the start command to: `npm start`

4. **Add Environment Variables**
   - Go to "Variables" tab
   - Add all variables from your `server/.env`:
     ```
     PORT=3001
     EMAIL_HOST=smtp.zohocloud.ca
     EMAIL_PORT=465
     EMAIL_SECURE=true
     EMAIL_USER=your-email@subhan.ca
     EMAIL_PASS=your-app-password
     CONTACT_EMAIL=info@subhan.ca
     SEND_CONFIRMATION=true
     ```

5. **Deploy**
   - Railway will automatically detect `package.json` in the `server` folder
   - It will install dependencies and start the server
   - Your backend will get a URL like: `https://your-app.railway.app`

6. **Get Your Backend URL**
   - Go to "Settings" → "Networking"
   - Copy the "Public Domain" URL (e.g., `https://your-app.railway.app`)

---

### Option 2: Render (Free Tier Available)

#### Steps:

1. **Sign up at Render**
   - Go to: https://render.com
   - Sign up with GitHub

2. **Create New Web Service**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select your `my-website` repo

3. **Configure Service**
   - **Name**: `portfolio-backend` (or any name)
   - **Root Directory**: `server`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`

4. **Add Environment Variables**
   - Scroll to "Environment Variables"
   - Add all your `.env` variables:
     ```
     PORT=3001
     EMAIL_HOST=smtp.zohocloud.ca
     EMAIL_PORT=465
     EMAIL_SECURE=true
     EMAIL_USER=your-email@subhan.ca
     EMAIL_PASS=your-app-password
     CONTACT_EMAIL=info@subhan.ca
     SEND_CONFIRMATION=true
     ```

5. **Deploy**
   - Click "Create Web Service"
   - Render will build and deploy
   - Your backend URL: `https://your-app.onrender.com`

---

### Option 3: Heroku (Free Tier Discontinued, Paid)

If you prefer Heroku, the process is similar but requires a paid plan now.

---

## Update Netlify Frontend

After deploying your backend, update Netlify to use the backend URL:

### Method 1: Netlify Environment Variables

1. **Go to Netlify Dashboard**
   - Select your site
   - Go to "Site settings" → "Environment variables"

2. **Add Environment Variable**
   - **Key**: `VITE_API_URL`
   - **Value**: Your backend URL (e.g., `https://your-app.railway.app`)
   - Click "Save"

3. **Redeploy**
   - Go to "Deploys" tab
   - Click "Trigger deploy" → "Clear cache and deploy site"

### Method 2: Update Code Directly

Alternatively, you can update the code to use the production backend URL:

1. **Update Contact.jsx**
   ```javascript
   const API_URL = import.meta.env.VITE_API_URL || 'https://your-backend-url.railway.app'
   ```

2. **Commit and push**
   ```bash
   git add src/components/Contact.jsx
   git commit -m "Update API URL for production"
   git push
   ```
   Netlify will automatically redeploy.

---

## Testing the Deployment

1. **Test Backend Health**
   - Visit: `https://your-backend-url.railway.app/api/health`
   - Should return: `{"status":"ok","message":"Server is running"}`

2. **Test Contact Form**
   - Go to your Netlify site
   - Navigate to Contact section
   - Fill out and submit the form
   - Check if you receive the email

3. **Check Browser Console**
   - Open browser DevTools (F12)
   - Go to Console tab
   - Submit the form and check for any errors

---

## Troubleshooting

### CORS Errors

If you see CORS errors, make sure your backend has CORS enabled (it should already be in `server.js`).

### Backend Not Responding

1. Check Railway/Render logs for errors
2. Verify environment variables are set correctly
3. Make sure the server is running (check logs)

### Email Not Sending

1. Verify Zoho App Password is correct
2. Check backend logs for email errors
3. Test email config: `cd server && npm run test-email`

### Frontend Can't Connect

1. Verify `VITE_API_URL` is set in Netlify
2. Check the backend URL is correct (no trailing slash)
3. Make sure backend is deployed and running

---

## Quick Reference

**Backend URL Format:**
- Railway: `https://your-app.railway.app`
- Render: `https://your-app.onrender.com`

**Netlify Environment Variable:**
- Key: `VITE_API_URL`
- Value: Your backend URL (no trailing slash)

**Backend Health Check:**
- `https://your-backend-url/api/health`

---

## Recommended Setup

1. ✅ Deploy backend to **Railway** (easiest)
2. ✅ Add `VITE_API_URL` to Netlify environment variables
3. ✅ Redeploy Netlify site
4. ✅ Test contact form

Your contact form should now work! 🎉

