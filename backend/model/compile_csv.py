import os
import csv


def compile_files_to_csv(root_dir, output_csv):
    # Open the CSV file for writing
    with open(output_csv, mode="w", newline="", encoding="utf-8") as csv_file:
        writer = csv.writer(csv_file)
        # Write the header
        writer.writerow(["filename", "filecontents"])

        # Walk through the directory
        for subdir, _, files in os.walk(root_dir):
            for file in files:
                if file.endswith(".java"):
                    file_path = os.path.join(subdir, file)
                    try:
                        # Read the file content
                        with open(file_path, "r", encoding="utf-8") as f:
                            contents = f.read()

                        contents = contents.replace("\n", "\\n")

                        # Write the filename and contents to CSV
                        writer.writerow([file_path, contents])

                    except Exception as e:
                        print(f"Error reading {file_path}: {e}")


if __name__ == "__main__":
    root_directory = input("Enter the directory path to compile: ")
    output_file = "compiled_files.csv"
    compile_files_to_csv(root_directory, output_file)
    print(f"CSV file '{output_file}' created successfully.")
