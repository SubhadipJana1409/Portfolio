import os

index_path = r'c:\Users\subha\OneDrive\Desktop\Final Portfolio\index.html'
js_path = r'c:\Users\subha\OneDrive\Desktop\Final Portfolio\assets\js\main.js'

with open(js_path, 'r', encoding='utf-8') as f:
    js_content = f.read()

with open(index_path, 'r', encoding='utf-8') as f:
    html_content = f.read()

target_script_tag = '<script type="module" src="assets/js/main.js"></script>'
replacement = f'<script type="module">\n{js_content}\n    </script>'

if target_script_tag in html_content:
    new_html = html_content.replace(target_script_tag, replacement)
    with open(index_path, 'w', encoding='utf-8') as f:
        f.write(new_html)
    print("Successfully inlined JS back into index.html")
else:
    print("Could not find external script tag to replace")
