<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0"xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<body>
<h2>Student Database</h2>
<table border="1">
<tr bgcolor="red">
<th>Name</th>
<th>Address</th>
<th>Std</th>
<th>Marks</th>
</tr>
<xsl:for-each select="Student/Person-Details">
<xsl:choose>
<xsl:when test="marks=90">
<tr bgcolor="orange">
<td><xsl:value-of select="name"/></td>
<td><xsl:value-of select="address"/></td>
<td><xsl:value-of select="std"/></td>
<td><xsl:value-of select="marks"/></td>
</tr>
</xsl:when>
<xsl:otherwise>
<tr>
<td><xsl:value-of select="name"/></td>
<td><xsl:value-of select="address"/></td>
<td><xsl:value-of select="std"/></td>
<td><xsl:value-of select="marks"/></td>
</tr>
</xsl:otherwise>
</xsl:choose>
</xsl:for-each>
</table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>