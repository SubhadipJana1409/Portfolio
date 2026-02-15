import os

index_path = r'c:\Users\subha\OneDrive\Desktop\Final Portfolio\index.html'
js_path = r'c:\Users\subha\OneDrive\Desktop\Final Portfolio\assets\js\main.js'

with open(index_path, 'r', encoding='utf-8') as f:
    content = f.read()

start_marker = '<script type="module">'
end_marker = '</script>'
start_idx = content.find(start_marker)
# Find the end marker after the start marker
end_idx = content.find(end_marker, start_idx)

if start_idx != -1 and end_idx != -1:
    # Check if we are currently holding the big block or the import line
    # The big block is identified by 'import { createClient }'
    block = content[start_idx:end_idx+len(end_marker)]
    
    if 'import { createClient }' in block and 'src=' not in block:
        # We need to extract this content to main.js and replace block with import
        # Extract content between script tags
        js_content = content[start_idx+len(start_marker):end_idx]
        
        # Write to main.js
        os.makedirs(os.path.dirname(js_path), exist_ok=True)
        with open(js_path, 'w', encoding='utf-8') as f:
            f.write(js_content.strip())
            
        # Replace in HTML
        new_tag = '<script type="module" src="assets/js/main.js"></script>'
        new_html = content[:start_idx] + new_tag + content[end_idx+len(end_marker):]
        
        with open(index_path, 'w', encoding='utf-8') as f:
            f.write(new_html)
        print("Moved JS back to main.js")
    else:
        print("JS is likely already external or not found as expected.")
else:
    print("Could not find script block")
