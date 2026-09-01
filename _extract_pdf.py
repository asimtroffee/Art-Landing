import subprocess
subprocess.run(['pip', 'install', 'PyMuPDF'], capture_output=True)

import fitz  # PyMuPDF
import os

pdf_path = r'C:\Users\Asim\Downloads\Teacher Handbook Edition 4 (1).pdf'
out_dir = r'c:\Users\Asim\scorea-workshops-landing\_pdf_pages'
os.makedirs(out_dir, exist_ok=True)

doc = fitz.open(pdf_path)
print(f'Total pages: {len(doc)}')

# Render first 25 pages as images
for i in range(min(25, len(doc))):
    page = doc[i]
    pix = page.get_pixmap(dpi=150)
    path = os.path.join(out_dir, f'page_{i+1:02d}.png')
    pix.save(path)
    print(f'Saved page {i+1} -> {path}')

print('\nDone!')
