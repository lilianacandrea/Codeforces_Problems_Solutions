n = int(input())
polyhedrons = []
facescounted = 0

for i in range(n):
	polyhedrons.append(input())

for i in range(len(polyhedrons)):
	if polyhedrons[i] == "Tetrahedron":
		facescounted = facescounted + 4
	elif polyhedrons[i] == "Cube":
		facescounted = facescounted + 6
	elif polyhedrons[i] == "Octahedron":
		facescounted = facescounted + 8
	elif polyhedrons[i] == "Dodecahedron":
		facescounted = facescounted + 12
	elif polyhedrons[i] == "Icosahedron":
		facescounted = facescounted + 20
print(facescounted)