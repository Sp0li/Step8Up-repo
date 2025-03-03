from InquirerPy import prompt,inquirer
from rich.console import Console
import os.path

console = Console()

#'''
#p = inquirer.text(message=": ").execute()


ptitle = inquirer.text(message="Project Title: ").execute()
pdesc = inquirer.text(message="Project Description: ",multiline=True).execute()
pinstallop = inquirer.text(message="Installation Instructions: ",multiline=True).execute()
usageinstr = inquirer.text(message="Usage Instructions: ").execute()
licenseselec = inquirer.text(message="Choose a license: ",
        completer={
            "MIT License": None,
            "Apache License 2.0": None,
            "GNU General Public License (GPL v3)": None,
            "GNU Lesser General Public License (LGPL v3)": None,
            "Mozilla Public License 2.0 (MPL 2.0)": None,
            "Creative Commons Licenses (CC0, CC BY, etc.)": None,
            "Unlicense": None,
        },).execute()
contactinfo = inquirer.text(message="Leave a way to contact you: ").execute()


save_path = 'C:/Users/Oli G/bootcamp/Step8/side projects/python'

name_of_file = "test"

completeName = os.path.join(save_path, name_of_file+".md")         

f = open(completeName, "w")

#message = f"{ptitle}\n{pdesc}\n{pinstallop}\n{usageinstr}\n{licenseselec}\n{contactinfo}"

message = f"# {ptitle}\n#\n{pdesc}\n\n### How to install:\n{pinstallop}\n\n### How to use:\n#\n        {usageinstr}\n\n### License\n{licenseselec}\n\n### Get in touch:\n{contactinfo}"

f.write(message)
f.close()

