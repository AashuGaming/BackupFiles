# getting ctime of the file/folder
# time will be in seconds
ctime = os.stat(path).st_ctime

# returning the time
return ctime