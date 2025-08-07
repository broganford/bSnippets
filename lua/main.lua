local json = require("dkjson")

local input = "input.txt"
local output = "output.json"

local function prompt(msg)
	io.write(msg)
	return io.read()
end

do
	local nameS = prompt("What would you like to name this snippet? ")
	local descriptionS = prompt("What would you like the description of this snippet to be? ")
	local prefixS = prompt("What would you like the prefix of this snippet to be? ")

	local inputFile = io.open(input, "r")
	if not inputFile then
		print("couldn't open the input file")
		return
	end

	local data = inputFile:read("*a")
	inputFile:close()

	local lines = {}
	for line in data:gmatch("[^\r\n]+") do
		if line:len() > 0 then
			local pLine = line:gsub('([^"\\])"', '%1\\"')
			table.insert(lines, pLine)
		end
	end

	local config = {
		[nameS] = {
			prefix = prefixS,
			body = lines,
			description = descriptionS,
		},
	}

	local writeData = json.encode(config, { indent = true })

	local outputFile = io.open(output, "w")
	if not outputFile then
		print("couldn't open the output file")
		return
	end

	outputFile:write(writeData)
	outputFile:close()
end
