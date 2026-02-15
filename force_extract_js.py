import os

index_path = r'c:\Users\subha\OneDrive\Desktop\Final Portfolio\index.html'

with open(index_path, 'r', encoding='utf-8') as f:
    content = f.read()

# We look for the start of the module script
start_marker = '<script type="module">'
start_pos = content.find(start_marker)

if start_pos != -1:
    # Find the closing tag for this script
    # We can assume it's the next </script>
    end_marker = '</script>'
    end_pos = content.find(end_marker, start_pos)
    
    if end_pos != -1:
        # Extract the full block including tags
        full_block = content[start_pos:end_pos+len(end_marker)]
        
        # Verify it's the right one (contains Sanity import)
        if 'import { createClient }' in full_block:
            # Create replacement
            replacement = '<script type="module" src="assets/js/main.js"></script>'
            
            # Replace
            new_content = content[:start_pos] + replacement + content[end_pos+len(end_marker):]
            
            with open(index_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print("Successfully replaced inline JS with external link.")
        else:
            print("Found a module script but it didn't contain 'createClient'. skipping.")
    else:
        print("Could not find closing script tag.")
else:
    print("Could not find <script type='module'> tag.")
