# `oceanAwsLaunchSpec` Submodule <a name="`oceanAwsLaunchSpec` Submodule" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OceanAwsLaunchSpec <a name="OceanAwsLaunchSpec" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec"></a>

Represents a {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec spotinst_ocean_aws_launch_spec}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLaunchSpec(Construct Scope, string Id, OceanAwsLaunchSpecConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig">OceanAwsLaunchSpecConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig">OceanAwsLaunchSpecConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putAutoscaleDown">PutAutoscaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putAutoscaleHeadrooms">PutAutoscaleHeadrooms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putAutoscaleHeadroomsAutomatic">PutAutoscaleHeadroomsAutomatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putBlockDeviceMappings">PutBlockDeviceMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putCreateOptions">PutCreateOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putDeleteOptions">PutDeleteOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putElasticIpPool">PutElasticIpPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putInstanceMetadataOptions">PutInstanceMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putLabels">PutLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putResourceLimits">PutResourceLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putSchedulingShutdownHours">PutSchedulingShutdownHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putSchedulingTask">PutSchedulingTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putStrategy">PutStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putTaints">PutTaints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putUpdatePolicy">PutUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetAssociatePublicIpAddress">ResetAssociatePublicIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetAutoscaleDown">ResetAutoscaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetAutoscaleHeadrooms">ResetAutoscaleHeadrooms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetAutoscaleHeadroomsAutomatic">ResetAutoscaleHeadroomsAutomatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetBlockDeviceMappings">ResetBlockDeviceMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetCreateOptions">ResetCreateOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetDeleteOptions">ResetDeleteOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetElasticIpPool">ResetElasticIpPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetIamInstanceProfile">ResetIamInstanceProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetImageId">ResetImageId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetInstanceMetadataOptions">ResetInstanceMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetInstanceTypes">ResetInstanceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetPreferredSpotTypes">ResetPreferredSpotTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetResourceLimits">ResetResourceLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetRestrictScaleDown">ResetRestrictScaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetRootVolumeSize">ResetRootVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetSchedulingShutdownHours">ResetSchedulingShutdownHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetSchedulingTask">ResetSchedulingTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetSecurityGroups">ResetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetStrategy">ResetStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetTaints">ResetTaints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetUpdatePolicy">ResetUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetUserData">ResetUserData</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAutoscaleDown` <a name="PutAutoscaleDown" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putAutoscaleDown"></a>

```csharp
private void PutAutoscaleDown(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putAutoscaleDown.parameter.value"></a>

- *Type:* object

---

##### `PutAutoscaleHeadrooms` <a name="PutAutoscaleHeadrooms" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putAutoscaleHeadrooms"></a>

```csharp
private void PutAutoscaleHeadrooms(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putAutoscaleHeadrooms.parameter.value"></a>

- *Type:* object

---

##### `PutAutoscaleHeadroomsAutomatic` <a name="PutAutoscaleHeadroomsAutomatic" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putAutoscaleHeadroomsAutomatic"></a>

```csharp
private void PutAutoscaleHeadroomsAutomatic(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putAutoscaleHeadroomsAutomatic.parameter.value"></a>

- *Type:* object

---

##### `PutBlockDeviceMappings` <a name="PutBlockDeviceMappings" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putBlockDeviceMappings"></a>

```csharp
private void PutBlockDeviceMappings(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putBlockDeviceMappings.parameter.value"></a>

- *Type:* object

---

##### `PutCreateOptions` <a name="PutCreateOptions" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putCreateOptions"></a>

```csharp
private void PutCreateOptions(OceanAwsLaunchSpecCreateOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putCreateOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptions">OceanAwsLaunchSpecCreateOptions</a>

---

##### `PutDeleteOptions` <a name="PutDeleteOptions" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putDeleteOptions"></a>

```csharp
private void PutDeleteOptions(OceanAwsLaunchSpecDeleteOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putDeleteOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptions">OceanAwsLaunchSpecDeleteOptions</a>

---

##### `PutElasticIpPool` <a name="PutElasticIpPool" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putElasticIpPool"></a>

```csharp
private void PutElasticIpPool(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putElasticIpPool.parameter.value"></a>

- *Type:* object

---

##### `PutInstanceMetadataOptions` <a name="PutInstanceMetadataOptions" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putInstanceMetadataOptions"></a>

```csharp
private void PutInstanceMetadataOptions(OceanAwsLaunchSpecInstanceMetadataOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putInstanceMetadataOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptions">OceanAwsLaunchSpecInstanceMetadataOptions</a>

---

##### `PutLabels` <a name="PutLabels" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putLabels"></a>

```csharp
private void PutLabels(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putLabels.parameter.value"></a>

- *Type:* object

---

##### `PutResourceLimits` <a name="PutResourceLimits" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putResourceLimits"></a>

```csharp
private void PutResourceLimits(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putResourceLimits.parameter.value"></a>

- *Type:* object

---

##### `PutSchedulingShutdownHours` <a name="PutSchedulingShutdownHours" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putSchedulingShutdownHours"></a>

```csharp
private void PutSchedulingShutdownHours(OceanAwsLaunchSpecSchedulingShutdownHours Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putSchedulingShutdownHours.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHours">OceanAwsLaunchSpecSchedulingShutdownHours</a>

---

##### `PutSchedulingTask` <a name="PutSchedulingTask" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putSchedulingTask"></a>

```csharp
private void PutSchedulingTask(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putSchedulingTask.parameter.value"></a>

- *Type:* object

---

##### `PutStrategy` <a name="PutStrategy" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putStrategy"></a>

```csharp
private void PutStrategy(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putStrategy.parameter.value"></a>

- *Type:* object

---

##### `PutTags` <a name="PutTags" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putTags"></a>

```csharp
private void PutTags(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putTags.parameter.value"></a>

- *Type:* object

---

##### `PutTaints` <a name="PutTaints" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putTaints"></a>

```csharp
private void PutTaints(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putTaints.parameter.value"></a>

- *Type:* object

---

##### `PutUpdatePolicy` <a name="PutUpdatePolicy" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putUpdatePolicy"></a>

```csharp
private void PutUpdatePolicy(OceanAwsLaunchSpecUpdatePolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putUpdatePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicy">OceanAwsLaunchSpecUpdatePolicy</a>

---

##### `ResetAssociatePublicIpAddress` <a name="ResetAssociatePublicIpAddress" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetAssociatePublicIpAddress"></a>

```csharp
private void ResetAssociatePublicIpAddress()
```

##### `ResetAutoscaleDown` <a name="ResetAutoscaleDown" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetAutoscaleDown"></a>

```csharp
private void ResetAutoscaleDown()
```

##### `ResetAutoscaleHeadrooms` <a name="ResetAutoscaleHeadrooms" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetAutoscaleHeadrooms"></a>

```csharp
private void ResetAutoscaleHeadrooms()
```

##### `ResetAutoscaleHeadroomsAutomatic` <a name="ResetAutoscaleHeadroomsAutomatic" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetAutoscaleHeadroomsAutomatic"></a>

```csharp
private void ResetAutoscaleHeadroomsAutomatic()
```

##### `ResetBlockDeviceMappings` <a name="ResetBlockDeviceMappings" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetBlockDeviceMappings"></a>

```csharp
private void ResetBlockDeviceMappings()
```

##### `ResetCreateOptions` <a name="ResetCreateOptions" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetCreateOptions"></a>

```csharp
private void ResetCreateOptions()
```

##### `ResetDeleteOptions` <a name="ResetDeleteOptions" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetDeleteOptions"></a>

```csharp
private void ResetDeleteOptions()
```

##### `ResetElasticIpPool` <a name="ResetElasticIpPool" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetElasticIpPool"></a>

```csharp
private void ResetElasticIpPool()
```

##### `ResetIamInstanceProfile` <a name="ResetIamInstanceProfile" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetIamInstanceProfile"></a>

```csharp
private void ResetIamInstanceProfile()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetImageId` <a name="ResetImageId" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetImageId"></a>

```csharp
private void ResetImageId()
```

##### `ResetInstanceMetadataOptions` <a name="ResetInstanceMetadataOptions" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetInstanceMetadataOptions"></a>

```csharp
private void ResetInstanceMetadataOptions()
```

##### `ResetInstanceTypes` <a name="ResetInstanceTypes" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetInstanceTypes"></a>

```csharp
private void ResetInstanceTypes()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPreferredSpotTypes` <a name="ResetPreferredSpotTypes" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetPreferredSpotTypes"></a>

```csharp
private void ResetPreferredSpotTypes()
```

##### `ResetResourceLimits` <a name="ResetResourceLimits" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetResourceLimits"></a>

```csharp
private void ResetResourceLimits()
```

##### `ResetRestrictScaleDown` <a name="ResetRestrictScaleDown" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetRestrictScaleDown"></a>

```csharp
private void ResetRestrictScaleDown()
```

##### `ResetRootVolumeSize` <a name="ResetRootVolumeSize" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetRootVolumeSize"></a>

```csharp
private void ResetRootVolumeSize()
```

##### `ResetSchedulingShutdownHours` <a name="ResetSchedulingShutdownHours" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetSchedulingShutdownHours"></a>

```csharp
private void ResetSchedulingShutdownHours()
```

##### `ResetSchedulingTask` <a name="ResetSchedulingTask" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetSchedulingTask"></a>

```csharp
private void ResetSchedulingTask()
```

##### `ResetSecurityGroups` <a name="ResetSecurityGroups" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetSecurityGroups"></a>

```csharp
private void ResetSecurityGroups()
```

##### `ResetStrategy` <a name="ResetStrategy" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetStrategy"></a>

```csharp
private void ResetStrategy()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetSubnetIds"></a>

```csharp
private void ResetSubnetIds()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTaints` <a name="ResetTaints" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetTaints"></a>

```csharp
private void ResetTaints()
```

##### `ResetUpdatePolicy` <a name="ResetUpdatePolicy" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetUpdatePolicy"></a>

```csharp
private void ResetUpdatePolicy()
```

##### `ResetUserData` <a name="ResetUserData" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetUserData"></a>

```csharp
private void ResetUserData()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

OceanAwsLaunchSpec.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

OceanAwsLaunchSpec.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

OceanAwsLaunchSpec.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.autoscaleDown">AutoscaleDown</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList">OceanAwsLaunchSpecAutoscaleDownList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.autoscaleHeadrooms">AutoscaleHeadrooms</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList">OceanAwsLaunchSpecAutoscaleHeadroomsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.autoscaleHeadroomsAutomatic">AutoscaleHeadroomsAutomatic</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList">OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.blockDeviceMappings">BlockDeviceMappings</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList">OceanAwsLaunchSpecBlockDeviceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.createOptions">CreateOptions</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference">OceanAwsLaunchSpecCreateOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.deleteOptions">DeleteOptions</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference">OceanAwsLaunchSpecDeleteOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.elasticIpPool">ElasticIpPool</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList">OceanAwsLaunchSpecElasticIpPoolList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.instanceMetadataOptions">InstanceMetadataOptions</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference">OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.labels">Labels</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList">OceanAwsLaunchSpecLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.resourceLimits">ResourceLimits</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList">OceanAwsLaunchSpecResourceLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.schedulingShutdownHours">SchedulingShutdownHours</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference">OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.schedulingTask">SchedulingTask</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList">OceanAwsLaunchSpecSchedulingTaskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.strategy">Strategy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList">OceanAwsLaunchSpecStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList">OceanAwsLaunchSpecTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.taints">Taints</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList">OceanAwsLaunchSpecTaintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.updatePolicy">UpdatePolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference">OceanAwsLaunchSpecUpdatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.associatePublicIpAddressInput">AssociatePublicIpAddressInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.autoscaleDownInput">AutoscaleDownInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.autoscaleHeadroomsAutomaticInput">AutoscaleHeadroomsAutomaticInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.autoscaleHeadroomsInput">AutoscaleHeadroomsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.blockDeviceMappingsInput">BlockDeviceMappingsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.createOptionsInput">CreateOptionsInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptions">OceanAwsLaunchSpecCreateOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.deleteOptionsInput">DeleteOptionsInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptions">OceanAwsLaunchSpecDeleteOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.elasticIpPoolInput">ElasticIpPoolInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.iamInstanceProfileInput">IamInstanceProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.imageIdInput">ImageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.instanceMetadataOptionsInput">InstanceMetadataOptionsInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptions">OceanAwsLaunchSpecInstanceMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.instanceTypesInput">InstanceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.labelsInput">LabelsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.oceanIdInput">OceanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.preferredSpotTypesInput">PreferredSpotTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.resourceLimitsInput">ResourceLimitsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.restrictScaleDownInput">RestrictScaleDownInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.rootVolumeSizeInput">RootVolumeSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.schedulingShutdownHoursInput">SchedulingShutdownHoursInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHours">OceanAwsLaunchSpecSchedulingShutdownHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.schedulingTaskInput">SchedulingTaskInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.securityGroupsInput">SecurityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.strategyInput">StrategyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.tagsInput">TagsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.taintsInput">TaintsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.updatePolicyInput">UpdatePolicyInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicy">OceanAwsLaunchSpecUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.userDataInput">UserDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.associatePublicIpAddress">AssociatePublicIpAddress</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.iamInstanceProfile">IamInstanceProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.imageId">ImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.instanceTypes">InstanceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.oceanId">OceanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.preferredSpotTypes">PreferredSpotTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.restrictScaleDown">RestrictScaleDown</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.rootVolumeSize">RootVolumeSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.userData">UserData</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AutoscaleDown`<sup>Required</sup> <a name="AutoscaleDown" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.autoscaleDown"></a>

```csharp
public OceanAwsLaunchSpecAutoscaleDownList AutoscaleDown { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList">OceanAwsLaunchSpecAutoscaleDownList</a>

---

##### `AutoscaleHeadrooms`<sup>Required</sup> <a name="AutoscaleHeadrooms" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.autoscaleHeadrooms"></a>

```csharp
public OceanAwsLaunchSpecAutoscaleHeadroomsList AutoscaleHeadrooms { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList">OceanAwsLaunchSpecAutoscaleHeadroomsList</a>

---

##### `AutoscaleHeadroomsAutomatic`<sup>Required</sup> <a name="AutoscaleHeadroomsAutomatic" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.autoscaleHeadroomsAutomatic"></a>

```csharp
public OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList AutoscaleHeadroomsAutomatic { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList">OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList</a>

---

##### `BlockDeviceMappings`<sup>Required</sup> <a name="BlockDeviceMappings" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.blockDeviceMappings"></a>

```csharp
public OceanAwsLaunchSpecBlockDeviceMappingsList BlockDeviceMappings { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList">OceanAwsLaunchSpecBlockDeviceMappingsList</a>

---

##### `CreateOptions`<sup>Required</sup> <a name="CreateOptions" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.createOptions"></a>

```csharp
public OceanAwsLaunchSpecCreateOptionsOutputReference CreateOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference">OceanAwsLaunchSpecCreateOptionsOutputReference</a>

---

##### `DeleteOptions`<sup>Required</sup> <a name="DeleteOptions" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.deleteOptions"></a>

```csharp
public OceanAwsLaunchSpecDeleteOptionsOutputReference DeleteOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference">OceanAwsLaunchSpecDeleteOptionsOutputReference</a>

---

##### `ElasticIpPool`<sup>Required</sup> <a name="ElasticIpPool" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.elasticIpPool"></a>

```csharp
public OceanAwsLaunchSpecElasticIpPoolList ElasticIpPool { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList">OceanAwsLaunchSpecElasticIpPoolList</a>

---

##### `InstanceMetadataOptions`<sup>Required</sup> <a name="InstanceMetadataOptions" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.instanceMetadataOptions"></a>

```csharp
public OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference InstanceMetadataOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference">OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference</a>

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.labels"></a>

```csharp
public OceanAwsLaunchSpecLabelsList Labels { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList">OceanAwsLaunchSpecLabelsList</a>

---

##### `ResourceLimits`<sup>Required</sup> <a name="ResourceLimits" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.resourceLimits"></a>

```csharp
public OceanAwsLaunchSpecResourceLimitsList ResourceLimits { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList">OceanAwsLaunchSpecResourceLimitsList</a>

---

##### `SchedulingShutdownHours`<sup>Required</sup> <a name="SchedulingShutdownHours" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.schedulingShutdownHours"></a>

```csharp
public OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference SchedulingShutdownHours { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference">OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference</a>

---

##### `SchedulingTask`<sup>Required</sup> <a name="SchedulingTask" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.schedulingTask"></a>

```csharp
public OceanAwsLaunchSpecSchedulingTaskList SchedulingTask { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList">OceanAwsLaunchSpecSchedulingTaskList</a>

---

##### `Strategy`<sup>Required</sup> <a name="Strategy" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.strategy"></a>

```csharp
public OceanAwsLaunchSpecStrategyList Strategy { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList">OceanAwsLaunchSpecStrategyList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.tags"></a>

```csharp
public OceanAwsLaunchSpecTagsList Tags { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList">OceanAwsLaunchSpecTagsList</a>

---

##### `Taints`<sup>Required</sup> <a name="Taints" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.taints"></a>

```csharp
public OceanAwsLaunchSpecTaintsList Taints { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList">OceanAwsLaunchSpecTaintsList</a>

---

##### `UpdatePolicy`<sup>Required</sup> <a name="UpdatePolicy" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.updatePolicy"></a>

```csharp
public OceanAwsLaunchSpecUpdatePolicyOutputReference UpdatePolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference">OceanAwsLaunchSpecUpdatePolicyOutputReference</a>

---

##### `AssociatePublicIpAddressInput`<sup>Optional</sup> <a name="AssociatePublicIpAddressInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.associatePublicIpAddressInput"></a>

```csharp
public object AssociatePublicIpAddressInput { get; }
```

- *Type:* object

---

##### `AutoscaleDownInput`<sup>Optional</sup> <a name="AutoscaleDownInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.autoscaleDownInput"></a>

```csharp
public object AutoscaleDownInput { get; }
```

- *Type:* object

---

##### `AutoscaleHeadroomsAutomaticInput`<sup>Optional</sup> <a name="AutoscaleHeadroomsAutomaticInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.autoscaleHeadroomsAutomaticInput"></a>

```csharp
public object AutoscaleHeadroomsAutomaticInput { get; }
```

- *Type:* object

---

##### `AutoscaleHeadroomsInput`<sup>Optional</sup> <a name="AutoscaleHeadroomsInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.autoscaleHeadroomsInput"></a>

```csharp
public object AutoscaleHeadroomsInput { get; }
```

- *Type:* object

---

##### `BlockDeviceMappingsInput`<sup>Optional</sup> <a name="BlockDeviceMappingsInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.blockDeviceMappingsInput"></a>

```csharp
public object BlockDeviceMappingsInput { get; }
```

- *Type:* object

---

##### `CreateOptionsInput`<sup>Optional</sup> <a name="CreateOptionsInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.createOptionsInput"></a>

```csharp
public OceanAwsLaunchSpecCreateOptions CreateOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptions">OceanAwsLaunchSpecCreateOptions</a>

---

##### `DeleteOptionsInput`<sup>Optional</sup> <a name="DeleteOptionsInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.deleteOptionsInput"></a>

```csharp
public OceanAwsLaunchSpecDeleteOptions DeleteOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptions">OceanAwsLaunchSpecDeleteOptions</a>

---

##### `ElasticIpPoolInput`<sup>Optional</sup> <a name="ElasticIpPoolInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.elasticIpPoolInput"></a>

```csharp
public object ElasticIpPoolInput { get; }
```

- *Type:* object

---

##### `IamInstanceProfileInput`<sup>Optional</sup> <a name="IamInstanceProfileInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.iamInstanceProfileInput"></a>

```csharp
public string IamInstanceProfileInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImageIdInput`<sup>Optional</sup> <a name="ImageIdInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.imageIdInput"></a>

```csharp
public string ImageIdInput { get; }
```

- *Type:* string

---

##### `InstanceMetadataOptionsInput`<sup>Optional</sup> <a name="InstanceMetadataOptionsInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.instanceMetadataOptionsInput"></a>

```csharp
public OceanAwsLaunchSpecInstanceMetadataOptions InstanceMetadataOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptions">OceanAwsLaunchSpecInstanceMetadataOptions</a>

---

##### `InstanceTypesInput`<sup>Optional</sup> <a name="InstanceTypesInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.instanceTypesInput"></a>

```csharp
public string[] InstanceTypesInput { get; }
```

- *Type:* string[]

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.labelsInput"></a>

```csharp
public object LabelsInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OceanIdInput`<sup>Optional</sup> <a name="OceanIdInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.oceanIdInput"></a>

```csharp
public string OceanIdInput { get; }
```

- *Type:* string

---

##### `PreferredSpotTypesInput`<sup>Optional</sup> <a name="PreferredSpotTypesInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.preferredSpotTypesInput"></a>

```csharp
public string[] PreferredSpotTypesInput { get; }
```

- *Type:* string[]

---

##### `ResourceLimitsInput`<sup>Optional</sup> <a name="ResourceLimitsInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.resourceLimitsInput"></a>

```csharp
public object ResourceLimitsInput { get; }
```

- *Type:* object

---

##### `RestrictScaleDownInput`<sup>Optional</sup> <a name="RestrictScaleDownInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.restrictScaleDownInput"></a>

```csharp
public object RestrictScaleDownInput { get; }
```

- *Type:* object

---

##### `RootVolumeSizeInput`<sup>Optional</sup> <a name="RootVolumeSizeInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.rootVolumeSizeInput"></a>

```csharp
public double RootVolumeSizeInput { get; }
```

- *Type:* double

---

##### `SchedulingShutdownHoursInput`<sup>Optional</sup> <a name="SchedulingShutdownHoursInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.schedulingShutdownHoursInput"></a>

```csharp
public OceanAwsLaunchSpecSchedulingShutdownHours SchedulingShutdownHoursInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHours">OceanAwsLaunchSpecSchedulingShutdownHours</a>

---

##### `SchedulingTaskInput`<sup>Optional</sup> <a name="SchedulingTaskInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.schedulingTaskInput"></a>

```csharp
public object SchedulingTaskInput { get; }
```

- *Type:* object

---

##### `SecurityGroupsInput`<sup>Optional</sup> <a name="SecurityGroupsInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.securityGroupsInput"></a>

```csharp
public string[] SecurityGroupsInput { get; }
```

- *Type:* string[]

---

##### `StrategyInput`<sup>Optional</sup> <a name="StrategyInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.strategyInput"></a>

```csharp
public object StrategyInput { get; }
```

- *Type:* object

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.tagsInput"></a>

```csharp
public object TagsInput { get; }
```

- *Type:* object

---

##### `TaintsInput`<sup>Optional</sup> <a name="TaintsInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.taintsInput"></a>

```csharp
public object TaintsInput { get; }
```

- *Type:* object

---

##### `UpdatePolicyInput`<sup>Optional</sup> <a name="UpdatePolicyInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.updatePolicyInput"></a>

```csharp
public OceanAwsLaunchSpecUpdatePolicy UpdatePolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicy">OceanAwsLaunchSpecUpdatePolicy</a>

---

##### `UserDataInput`<sup>Optional</sup> <a name="UserDataInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.userDataInput"></a>

```csharp
public string UserDataInput { get; }
```

- *Type:* string

---

##### `AssociatePublicIpAddress`<sup>Required</sup> <a name="AssociatePublicIpAddress" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.associatePublicIpAddress"></a>

```csharp
public object AssociatePublicIpAddress { get; }
```

- *Type:* object

---

##### `IamInstanceProfile`<sup>Required</sup> <a name="IamInstanceProfile" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.iamInstanceProfile"></a>

```csharp
public string IamInstanceProfile { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.imageId"></a>

```csharp
public string ImageId { get; }
```

- *Type:* string

---

##### `InstanceTypes`<sup>Required</sup> <a name="InstanceTypes" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.instanceTypes"></a>

```csharp
public string[] InstanceTypes { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OceanId`<sup>Required</sup> <a name="OceanId" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.oceanId"></a>

```csharp
public string OceanId { get; }
```

- *Type:* string

---

##### `PreferredSpotTypes`<sup>Required</sup> <a name="PreferredSpotTypes" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.preferredSpotTypes"></a>

```csharp
public string[] PreferredSpotTypes { get; }
```

- *Type:* string[]

---

##### `RestrictScaleDown`<sup>Required</sup> <a name="RestrictScaleDown" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.restrictScaleDown"></a>

```csharp
public object RestrictScaleDown { get; }
```

- *Type:* object

---

##### `RootVolumeSize`<sup>Required</sup> <a name="RootVolumeSize" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.rootVolumeSize"></a>

```csharp
public double RootVolumeSize { get; }
```

- *Type:* double

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; }
```

- *Type:* string[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `UserData`<sup>Required</sup> <a name="UserData" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.userData"></a>

```csharp
public string UserData { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OceanAwsLaunchSpecAutoscaleDown <a name="OceanAwsLaunchSpecAutoscaleDown" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDown"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDown.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLaunchSpecAutoscaleDown {
    double MaxScaleDownPercentage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDown.property.maxScaleDownPercentage">MaxScaleDownPercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#max_scale_down_percentage OceanAwsLaunchSpec#max_scale_down_percentage}. |

---

##### `MaxScaleDownPercentage`<sup>Optional</sup> <a name="MaxScaleDownPercentage" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDown.property.maxScaleDownPercentage"></a>

```csharp
public double MaxScaleDownPercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#max_scale_down_percentage OceanAwsLaunchSpec#max_scale_down_percentage}.

---

### OceanAwsLaunchSpecAutoscaleHeadrooms <a name="OceanAwsLaunchSpecAutoscaleHeadrooms" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadrooms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadrooms.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLaunchSpecAutoscaleHeadrooms {
    double NumOfUnits,
    double CpuPerUnit = null,
    double GpuPerUnit = null,
    double MemoryPerUnit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadrooms.property.numOfUnits">NumOfUnits</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#num_of_units OceanAwsLaunchSpec#num_of_units}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadrooms.property.cpuPerUnit">CpuPerUnit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#cpu_per_unit OceanAwsLaunchSpec#cpu_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadrooms.property.gpuPerUnit">GpuPerUnit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#gpu_per_unit OceanAwsLaunchSpec#gpu_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadrooms.property.memoryPerUnit">MemoryPerUnit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#memory_per_unit OceanAwsLaunchSpec#memory_per_unit}. |

---

##### `NumOfUnits`<sup>Required</sup> <a name="NumOfUnits" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadrooms.property.numOfUnits"></a>

```csharp
public double NumOfUnits { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#num_of_units OceanAwsLaunchSpec#num_of_units}.

---

##### `CpuPerUnit`<sup>Optional</sup> <a name="CpuPerUnit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadrooms.property.cpuPerUnit"></a>

```csharp
public double CpuPerUnit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#cpu_per_unit OceanAwsLaunchSpec#cpu_per_unit}.

---

##### `GpuPerUnit`<sup>Optional</sup> <a name="GpuPerUnit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadrooms.property.gpuPerUnit"></a>

```csharp
public double GpuPerUnit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#gpu_per_unit OceanAwsLaunchSpec#gpu_per_unit}.

---

##### `MemoryPerUnit`<sup>Optional</sup> <a name="MemoryPerUnit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadrooms.property.memoryPerUnit"></a>

```csharp
public double MemoryPerUnit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#memory_per_unit OceanAwsLaunchSpec#memory_per_unit}.

---

### OceanAwsLaunchSpecAutoscaleHeadroomsAutomatic <a name="OceanAwsLaunchSpecAutoscaleHeadroomsAutomatic" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomatic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomatic.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLaunchSpecAutoscaleHeadroomsAutomatic {
    double AutoHeadroomPercentage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomatic.property.autoHeadroomPercentage">AutoHeadroomPercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#auto_headroom_percentage OceanAwsLaunchSpec#auto_headroom_percentage}. |

---

##### `AutoHeadroomPercentage`<sup>Optional</sup> <a name="AutoHeadroomPercentage" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomatic.property.autoHeadroomPercentage"></a>

```csharp
public double AutoHeadroomPercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#auto_headroom_percentage OceanAwsLaunchSpec#auto_headroom_percentage}.

---

### OceanAwsLaunchSpecBlockDeviceMappings <a name="OceanAwsLaunchSpecBlockDeviceMappings" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLaunchSpecBlockDeviceMappings {
    string DeviceName = null,
    OceanAwsLaunchSpecBlockDeviceMappingsEbs Ebs = null,
    string NoDevice = null,
    string VirtualName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappings.property.deviceName">DeviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#device_name OceanAwsLaunchSpec#device_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappings.property.ebs">Ebs</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs">OceanAwsLaunchSpecBlockDeviceMappingsEbs</a></code> | ebs block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappings.property.noDevice">NoDevice</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#no_device OceanAwsLaunchSpec#no_device}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappings.property.virtualName">VirtualName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#virtual_name OceanAwsLaunchSpec#virtual_name}. |

---

##### `DeviceName`<sup>Optional</sup> <a name="DeviceName" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappings.property.deviceName"></a>

```csharp
public string DeviceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#device_name OceanAwsLaunchSpec#device_name}.

---

##### `Ebs`<sup>Optional</sup> <a name="Ebs" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappings.property.ebs"></a>

```csharp
public OceanAwsLaunchSpecBlockDeviceMappingsEbs Ebs { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs">OceanAwsLaunchSpecBlockDeviceMappingsEbs</a>

ebs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#ebs OceanAwsLaunchSpec#ebs}

---

##### `NoDevice`<sup>Optional</sup> <a name="NoDevice" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappings.property.noDevice"></a>

```csharp
public string NoDevice { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#no_device OceanAwsLaunchSpec#no_device}.

---

##### `VirtualName`<sup>Optional</sup> <a name="VirtualName" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappings.property.virtualName"></a>

```csharp
public string VirtualName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#virtual_name OceanAwsLaunchSpec#virtual_name}.

---

### OceanAwsLaunchSpecBlockDeviceMappingsEbs <a name="OceanAwsLaunchSpecBlockDeviceMappingsEbs" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLaunchSpecBlockDeviceMappingsEbs {
    object DeleteOnTermination = null,
    OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize DynamicVolumeSize = null,
    object Encrypted = null,
    double Iops = null,
    string KmsKeyId = null,
    string SnapshotId = null,
    double Throughput = null,
    double VolumeSize = null,
    string VolumeType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#delete_on_termination OceanAwsLaunchSpec#delete_on_termination}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs.property.dynamicVolumeSize">DynamicVolumeSize</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize">OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize</a></code> | dynamic_volume_size block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs.property.encrypted">Encrypted</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#encrypted OceanAwsLaunchSpec#encrypted}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs.property.iops">Iops</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#iops OceanAwsLaunchSpec#iops}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#kms_key_id OceanAwsLaunchSpec#kms_key_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs.property.snapshotId">SnapshotId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#snapshot_id OceanAwsLaunchSpec#snapshot_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs.property.throughput">Throughput</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#throughput OceanAwsLaunchSpec#throughput}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs.property.volumeSize">VolumeSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#volume_size OceanAwsLaunchSpec#volume_size}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs.property.volumeType">VolumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#volume_type OceanAwsLaunchSpec#volume_type}. |

---

##### `DeleteOnTermination`<sup>Optional</sup> <a name="DeleteOnTermination" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs.property.deleteOnTermination"></a>

```csharp
public object DeleteOnTermination { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#delete_on_termination OceanAwsLaunchSpec#delete_on_termination}.

---

##### `DynamicVolumeSize`<sup>Optional</sup> <a name="DynamicVolumeSize" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs.property.dynamicVolumeSize"></a>

```csharp
public OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize DynamicVolumeSize { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize">OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize</a>

dynamic_volume_size block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#dynamic_volume_size OceanAwsLaunchSpec#dynamic_volume_size}

---

##### `Encrypted`<sup>Optional</sup> <a name="Encrypted" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs.property.encrypted"></a>

```csharp
public object Encrypted { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#encrypted OceanAwsLaunchSpec#encrypted}.

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs.property.iops"></a>

```csharp
public double Iops { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#iops OceanAwsLaunchSpec#iops}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#kms_key_id OceanAwsLaunchSpec#kms_key_id}.

---

##### `SnapshotId`<sup>Optional</sup> <a name="SnapshotId" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs.property.snapshotId"></a>

```csharp
public string SnapshotId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#snapshot_id OceanAwsLaunchSpec#snapshot_id}.

---

##### `Throughput`<sup>Optional</sup> <a name="Throughput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs.property.throughput"></a>

```csharp
public double Throughput { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#throughput OceanAwsLaunchSpec#throughput}.

---

##### `VolumeSize`<sup>Optional</sup> <a name="VolumeSize" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs.property.volumeSize"></a>

```csharp
public double VolumeSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#volume_size OceanAwsLaunchSpec#volume_size}.

---

##### `VolumeType`<sup>Optional</sup> <a name="VolumeType" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs.property.volumeType"></a>

```csharp
public string VolumeType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#volume_type OceanAwsLaunchSpec#volume_type}.

---

### OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize <a name="OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize {
    double BaseSize,
    string Resource,
    double SizePerResourceUnit
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize.property.baseSize">BaseSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#base_size OceanAwsLaunchSpec#base_size}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize.property.resource">Resource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#resource OceanAwsLaunchSpec#resource}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize.property.sizePerResourceUnit">SizePerResourceUnit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#size_per_resource_unit OceanAwsLaunchSpec#size_per_resource_unit}. |

---

##### `BaseSize`<sup>Required</sup> <a name="BaseSize" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize.property.baseSize"></a>

```csharp
public double BaseSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#base_size OceanAwsLaunchSpec#base_size}.

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize.property.resource"></a>

```csharp
public string Resource { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#resource OceanAwsLaunchSpec#resource}.

---

##### `SizePerResourceUnit`<sup>Required</sup> <a name="SizePerResourceUnit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize.property.sizePerResourceUnit"></a>

```csharp
public double SizePerResourceUnit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#size_per_resource_unit OceanAwsLaunchSpec#size_per_resource_unit}.

---

### OceanAwsLaunchSpecConfig <a name="OceanAwsLaunchSpecConfig" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLaunchSpecConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string OceanId,
    object AssociatePublicIpAddress = null,
    object AutoscaleDown = null,
    object AutoscaleHeadrooms = null,
    object AutoscaleHeadroomsAutomatic = null,
    object BlockDeviceMappings = null,
    OceanAwsLaunchSpecCreateOptions CreateOptions = null,
    OceanAwsLaunchSpecDeleteOptions DeleteOptions = null,
    object ElasticIpPool = null,
    string IamInstanceProfile = null,
    string Id = null,
    string ImageId = null,
    OceanAwsLaunchSpecInstanceMetadataOptions InstanceMetadataOptions = null,
    string[] InstanceTypes = null,
    object Labels = null,
    string Name = null,
    string[] PreferredSpotTypes = null,
    object ResourceLimits = null,
    object RestrictScaleDown = null,
    double RootVolumeSize = null,
    OceanAwsLaunchSpecSchedulingShutdownHours SchedulingShutdownHours = null,
    object SchedulingTask = null,
    string[] SecurityGroups = null,
    object Strategy = null,
    string[] SubnetIds = null,
    object Tags = null,
    object Taints = null,
    OceanAwsLaunchSpecUpdatePolicy UpdatePolicy = null,
    string UserData = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.oceanId">OceanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#ocean_id OceanAwsLaunchSpec#ocean_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.associatePublicIpAddress">AssociatePublicIpAddress</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#associate_public_ip_address OceanAwsLaunchSpec#associate_public_ip_address}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.autoscaleDown">AutoscaleDown</a></code> | <code>object</code> | autoscale_down block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.autoscaleHeadrooms">AutoscaleHeadrooms</a></code> | <code>object</code> | autoscale_headrooms block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.autoscaleHeadroomsAutomatic">AutoscaleHeadroomsAutomatic</a></code> | <code>object</code> | autoscale_headrooms_automatic block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.blockDeviceMappings">BlockDeviceMappings</a></code> | <code>object</code> | block_device_mappings block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.createOptions">CreateOptions</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptions">OceanAwsLaunchSpecCreateOptions</a></code> | create_options block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.deleteOptions">DeleteOptions</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptions">OceanAwsLaunchSpecDeleteOptions</a></code> | delete_options block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.elasticIpPool">ElasticIpPool</a></code> | <code>object</code> | elastic_ip_pool block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.iamInstanceProfile">IamInstanceProfile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#iam_instance_profile OceanAwsLaunchSpec#iam_instance_profile}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#id OceanAwsLaunchSpec#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.imageId">ImageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#image_id OceanAwsLaunchSpec#image_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.instanceMetadataOptions">InstanceMetadataOptions</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptions">OceanAwsLaunchSpecInstanceMetadataOptions</a></code> | instance_metadata_options block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.instanceTypes">InstanceTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#instance_types OceanAwsLaunchSpec#instance_types}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.labels">Labels</a></code> | <code>object</code> | labels block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#name OceanAwsLaunchSpec#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.preferredSpotTypes">PreferredSpotTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#preferred_spot_types OceanAwsLaunchSpec#preferred_spot_types}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.resourceLimits">ResourceLimits</a></code> | <code>object</code> | resource_limits block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.restrictScaleDown">RestrictScaleDown</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#restrict_scale_down OceanAwsLaunchSpec#restrict_scale_down}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.rootVolumeSize">RootVolumeSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#root_volume_size OceanAwsLaunchSpec#root_volume_size}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.schedulingShutdownHours">SchedulingShutdownHours</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHours">OceanAwsLaunchSpecSchedulingShutdownHours</a></code> | scheduling_shutdown_hours block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.schedulingTask">SchedulingTask</a></code> | <code>object</code> | scheduling_task block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#security_groups OceanAwsLaunchSpec#security_groups}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.strategy">Strategy</a></code> | <code>object</code> | strategy block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#subnet_ids OceanAwsLaunchSpec#subnet_ids}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.tags">Tags</a></code> | <code>object</code> | tags block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.taints">Taints</a></code> | <code>object</code> | taints block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.updatePolicy">UpdatePolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicy">OceanAwsLaunchSpecUpdatePolicy</a></code> | update_policy block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.userData">UserData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#user_data OceanAwsLaunchSpec#user_data}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `OceanId`<sup>Required</sup> <a name="OceanId" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.oceanId"></a>

```csharp
public string OceanId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#ocean_id OceanAwsLaunchSpec#ocean_id}.

---

##### `AssociatePublicIpAddress`<sup>Optional</sup> <a name="AssociatePublicIpAddress" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.associatePublicIpAddress"></a>

```csharp
public object AssociatePublicIpAddress { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#associate_public_ip_address OceanAwsLaunchSpec#associate_public_ip_address}.

---

##### `AutoscaleDown`<sup>Optional</sup> <a name="AutoscaleDown" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.autoscaleDown"></a>

```csharp
public object AutoscaleDown { get; set; }
```

- *Type:* object

autoscale_down block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#autoscale_down OceanAwsLaunchSpec#autoscale_down}

---

##### `AutoscaleHeadrooms`<sup>Optional</sup> <a name="AutoscaleHeadrooms" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.autoscaleHeadrooms"></a>

```csharp
public object AutoscaleHeadrooms { get; set; }
```

- *Type:* object

autoscale_headrooms block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#autoscale_headrooms OceanAwsLaunchSpec#autoscale_headrooms}

---

##### `AutoscaleHeadroomsAutomatic`<sup>Optional</sup> <a name="AutoscaleHeadroomsAutomatic" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.autoscaleHeadroomsAutomatic"></a>

```csharp
public object AutoscaleHeadroomsAutomatic { get; set; }
```

- *Type:* object

autoscale_headrooms_automatic block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#autoscale_headrooms_automatic OceanAwsLaunchSpec#autoscale_headrooms_automatic}

---

##### `BlockDeviceMappings`<sup>Optional</sup> <a name="BlockDeviceMappings" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.blockDeviceMappings"></a>

```csharp
public object BlockDeviceMappings { get; set; }
```

- *Type:* object

block_device_mappings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#block_device_mappings OceanAwsLaunchSpec#block_device_mappings}

---

##### `CreateOptions`<sup>Optional</sup> <a name="CreateOptions" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.createOptions"></a>

```csharp
public OceanAwsLaunchSpecCreateOptions CreateOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptions">OceanAwsLaunchSpecCreateOptions</a>

create_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#create_options OceanAwsLaunchSpec#create_options}

---

##### `DeleteOptions`<sup>Optional</sup> <a name="DeleteOptions" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.deleteOptions"></a>

```csharp
public OceanAwsLaunchSpecDeleteOptions DeleteOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptions">OceanAwsLaunchSpecDeleteOptions</a>

delete_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#delete_options OceanAwsLaunchSpec#delete_options}

---

##### `ElasticIpPool`<sup>Optional</sup> <a name="ElasticIpPool" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.elasticIpPool"></a>

```csharp
public object ElasticIpPool { get; set; }
```

- *Type:* object

elastic_ip_pool block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#elastic_ip_pool OceanAwsLaunchSpec#elastic_ip_pool}

---

##### `IamInstanceProfile`<sup>Optional</sup> <a name="IamInstanceProfile" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.iamInstanceProfile"></a>

```csharp
public string IamInstanceProfile { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#iam_instance_profile OceanAwsLaunchSpec#iam_instance_profile}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#id OceanAwsLaunchSpec#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImageId`<sup>Optional</sup> <a name="ImageId" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.imageId"></a>

```csharp
public string ImageId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#image_id OceanAwsLaunchSpec#image_id}.

---

##### `InstanceMetadataOptions`<sup>Optional</sup> <a name="InstanceMetadataOptions" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.instanceMetadataOptions"></a>

```csharp
public OceanAwsLaunchSpecInstanceMetadataOptions InstanceMetadataOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptions">OceanAwsLaunchSpecInstanceMetadataOptions</a>

instance_metadata_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#instance_metadata_options OceanAwsLaunchSpec#instance_metadata_options}

---

##### `InstanceTypes`<sup>Optional</sup> <a name="InstanceTypes" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.instanceTypes"></a>

```csharp
public string[] InstanceTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#instance_types OceanAwsLaunchSpec#instance_types}.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.labels"></a>

```csharp
public object Labels { get; set; }
```

- *Type:* object

labels block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#labels OceanAwsLaunchSpec#labels}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#name OceanAwsLaunchSpec#name}.

---

##### `PreferredSpotTypes`<sup>Optional</sup> <a name="PreferredSpotTypes" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.preferredSpotTypes"></a>

```csharp
public string[] PreferredSpotTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#preferred_spot_types OceanAwsLaunchSpec#preferred_spot_types}.

---

##### `ResourceLimits`<sup>Optional</sup> <a name="ResourceLimits" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.resourceLimits"></a>

```csharp
public object ResourceLimits { get; set; }
```

- *Type:* object

resource_limits block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#resource_limits OceanAwsLaunchSpec#resource_limits}

---

##### `RestrictScaleDown`<sup>Optional</sup> <a name="RestrictScaleDown" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.restrictScaleDown"></a>

```csharp
public object RestrictScaleDown { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#restrict_scale_down OceanAwsLaunchSpec#restrict_scale_down}.

---

##### `RootVolumeSize`<sup>Optional</sup> <a name="RootVolumeSize" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.rootVolumeSize"></a>

```csharp
public double RootVolumeSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#root_volume_size OceanAwsLaunchSpec#root_volume_size}.

---

##### `SchedulingShutdownHours`<sup>Optional</sup> <a name="SchedulingShutdownHours" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.schedulingShutdownHours"></a>

```csharp
public OceanAwsLaunchSpecSchedulingShutdownHours SchedulingShutdownHours { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHours">OceanAwsLaunchSpecSchedulingShutdownHours</a>

scheduling_shutdown_hours block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#scheduling_shutdown_hours OceanAwsLaunchSpec#scheduling_shutdown_hours}

---

##### `SchedulingTask`<sup>Optional</sup> <a name="SchedulingTask" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.schedulingTask"></a>

```csharp
public object SchedulingTask { get; set; }
```

- *Type:* object

scheduling_task block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#scheduling_task OceanAwsLaunchSpec#scheduling_task}

---

##### `SecurityGroups`<sup>Optional</sup> <a name="SecurityGroups" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#security_groups OceanAwsLaunchSpec#security_groups}.

---

##### `Strategy`<sup>Optional</sup> <a name="Strategy" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.strategy"></a>

```csharp
public object Strategy { get; set; }
```

- *Type:* object

strategy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#strategy OceanAwsLaunchSpec#strategy}

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#subnet_ids OceanAwsLaunchSpec#subnet_ids}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.tags"></a>

```csharp
public object Tags { get; set; }
```

- *Type:* object

tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#tags OceanAwsLaunchSpec#tags}

---

##### `Taints`<sup>Optional</sup> <a name="Taints" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.taints"></a>

```csharp
public object Taints { get; set; }
```

- *Type:* object

taints block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#taints OceanAwsLaunchSpec#taints}

---

##### `UpdatePolicy`<sup>Optional</sup> <a name="UpdatePolicy" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.updatePolicy"></a>

```csharp
public OceanAwsLaunchSpecUpdatePolicy UpdatePolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicy">OceanAwsLaunchSpecUpdatePolicy</a>

update_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#update_policy OceanAwsLaunchSpec#update_policy}

---

##### `UserData`<sup>Optional</sup> <a name="UserData" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.userData"></a>

```csharp
public string UserData { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#user_data OceanAwsLaunchSpec#user_data}.

---

### OceanAwsLaunchSpecCreateOptions <a name="OceanAwsLaunchSpecCreateOptions" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLaunchSpecCreateOptions {
    double InitialNodes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptions.property.initialNodes">InitialNodes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#initial_nodes OceanAwsLaunchSpec#initial_nodes}. |

---

##### `InitialNodes`<sup>Optional</sup> <a name="InitialNodes" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptions.property.initialNodes"></a>

```csharp
public double InitialNodes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#initial_nodes OceanAwsLaunchSpec#initial_nodes}.

---

### OceanAwsLaunchSpecDeleteOptions <a name="OceanAwsLaunchSpecDeleteOptions" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLaunchSpecDeleteOptions {
    object ForceDelete,
    object DeleteNodes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptions.property.forceDelete">ForceDelete</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#force_delete OceanAwsLaunchSpec#force_delete}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptions.property.deleteNodes">DeleteNodes</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#delete_nodes OceanAwsLaunchSpec#delete_nodes}. |

---

##### `ForceDelete`<sup>Required</sup> <a name="ForceDelete" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptions.property.forceDelete"></a>

```csharp
public object ForceDelete { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#force_delete OceanAwsLaunchSpec#force_delete}.

---

##### `DeleteNodes`<sup>Optional</sup> <a name="DeleteNodes" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptions.property.deleteNodes"></a>

```csharp
public object DeleteNodes { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#delete_nodes OceanAwsLaunchSpec#delete_nodes}.

---

### OceanAwsLaunchSpecElasticIpPool <a name="OceanAwsLaunchSpecElasticIpPool" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPool"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPool.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLaunchSpecElasticIpPool {
    OceanAwsLaunchSpecElasticIpPoolTagSelector TagSelector = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPool.property.tagSelector">TagSelector</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelector">OceanAwsLaunchSpecElasticIpPoolTagSelector</a></code> | tag_selector block. |

---

##### `TagSelector`<sup>Optional</sup> <a name="TagSelector" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPool.property.tagSelector"></a>

```csharp
public OceanAwsLaunchSpecElasticIpPoolTagSelector TagSelector { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelector">OceanAwsLaunchSpecElasticIpPoolTagSelector</a>

tag_selector block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#tag_selector OceanAwsLaunchSpec#tag_selector}

---

### OceanAwsLaunchSpecElasticIpPoolTagSelector <a name="OceanAwsLaunchSpecElasticIpPoolTagSelector" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelector.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLaunchSpecElasticIpPoolTagSelector {
    string TagKey,
    string TagValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelector.property.tagKey">TagKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#tag_key OceanAwsLaunchSpec#tag_key}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelector.property.tagValue">TagValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#tag_value OceanAwsLaunchSpec#tag_value}. |

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelector.property.tagKey"></a>

```csharp
public string TagKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#tag_key OceanAwsLaunchSpec#tag_key}.

---

##### `TagValue`<sup>Optional</sup> <a name="TagValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelector.property.tagValue"></a>

```csharp
public string TagValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#tag_value OceanAwsLaunchSpec#tag_value}.

---

### OceanAwsLaunchSpecInstanceMetadataOptions <a name="OceanAwsLaunchSpecInstanceMetadataOptions" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLaunchSpecInstanceMetadataOptions {
    string HttpTokens,
    double HttpPutResponseHopLimit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptions.property.httpTokens">HttpTokens</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#http_tokens OceanAwsLaunchSpec#http_tokens}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptions.property.httpPutResponseHopLimit">HttpPutResponseHopLimit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#http_put_response_hop_limit OceanAwsLaunchSpec#http_put_response_hop_limit}. |

---

##### `HttpTokens`<sup>Required</sup> <a name="HttpTokens" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptions.property.httpTokens"></a>

```csharp
public string HttpTokens { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#http_tokens OceanAwsLaunchSpec#http_tokens}.

---

##### `HttpPutResponseHopLimit`<sup>Optional</sup> <a name="HttpPutResponseHopLimit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptions.property.httpPutResponseHopLimit"></a>

```csharp
public double HttpPutResponseHopLimit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#http_put_response_hop_limit OceanAwsLaunchSpec#http_put_response_hop_limit}.

---

### OceanAwsLaunchSpecLabels <a name="OceanAwsLaunchSpecLabels" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabels.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLaunchSpecLabels {
    string Key,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabels.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#key OceanAwsLaunchSpec#key}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabels.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#value OceanAwsLaunchSpec#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabels.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#key OceanAwsLaunchSpec#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabels.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#value OceanAwsLaunchSpec#value}.

---

### OceanAwsLaunchSpecResourceLimits <a name="OceanAwsLaunchSpecResourceLimits" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimits.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLaunchSpecResourceLimits {
    double MaxInstanceCount = null,
    double MinInstanceCount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimits.property.maxInstanceCount">MaxInstanceCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#max_instance_count OceanAwsLaunchSpec#max_instance_count}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimits.property.minInstanceCount">MinInstanceCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#min_instance_count OceanAwsLaunchSpec#min_instance_count}. |

---

##### `MaxInstanceCount`<sup>Optional</sup> <a name="MaxInstanceCount" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimits.property.maxInstanceCount"></a>

```csharp
public double MaxInstanceCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#max_instance_count OceanAwsLaunchSpec#max_instance_count}.

---

##### `MinInstanceCount`<sup>Optional</sup> <a name="MinInstanceCount" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimits.property.minInstanceCount"></a>

```csharp
public double MinInstanceCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#min_instance_count OceanAwsLaunchSpec#min_instance_count}.

---

### OceanAwsLaunchSpecSchedulingShutdownHours <a name="OceanAwsLaunchSpecSchedulingShutdownHours" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHours"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHours.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLaunchSpecSchedulingShutdownHours {
    string[] TimeWindows,
    object IsEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHours.property.timeWindows">TimeWindows</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#time_windows OceanAwsLaunchSpec#time_windows}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHours.property.isEnabled">IsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#is_enabled OceanAwsLaunchSpec#is_enabled}. |

---

##### `TimeWindows`<sup>Required</sup> <a name="TimeWindows" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHours.property.timeWindows"></a>

```csharp
public string[] TimeWindows { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#time_windows OceanAwsLaunchSpec#time_windows}.

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHours.property.isEnabled"></a>

```csharp
public object IsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#is_enabled OceanAwsLaunchSpec#is_enabled}.

---

### OceanAwsLaunchSpecSchedulingTask <a name="OceanAwsLaunchSpecSchedulingTask" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTask.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLaunchSpecSchedulingTask {
    string CronExpression,
    object IsEnabled,
    string TaskType,
    object TaskHeadroom = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTask.property.cronExpression">CronExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#cron_expression OceanAwsLaunchSpec#cron_expression}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTask.property.isEnabled">IsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#is_enabled OceanAwsLaunchSpec#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTask.property.taskType">TaskType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#task_type OceanAwsLaunchSpec#task_type}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTask.property.taskHeadroom">TaskHeadroom</a></code> | <code>object</code> | task_headroom block. |

---

##### `CronExpression`<sup>Required</sup> <a name="CronExpression" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTask.property.cronExpression"></a>

```csharp
public string CronExpression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#cron_expression OceanAwsLaunchSpec#cron_expression}.

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTask.property.isEnabled"></a>

```csharp
public object IsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#is_enabled OceanAwsLaunchSpec#is_enabled}.

---

##### `TaskType`<sup>Required</sup> <a name="TaskType" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTask.property.taskType"></a>

```csharp
public string TaskType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#task_type OceanAwsLaunchSpec#task_type}.

---

##### `TaskHeadroom`<sup>Optional</sup> <a name="TaskHeadroom" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTask.property.taskHeadroom"></a>

```csharp
public object TaskHeadroom { get; set; }
```

- *Type:* object

task_headroom block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#task_headroom OceanAwsLaunchSpec#task_headroom}

---

### OceanAwsLaunchSpecSchedulingTaskTaskHeadroom <a name="OceanAwsLaunchSpecSchedulingTaskTaskHeadroom" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroom.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLaunchSpecSchedulingTaskTaskHeadroom {
    double NumOfUnits,
    double CpuPerUnit = null,
    double GpuPerUnit = null,
    double MemoryPerUnit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroom.property.numOfUnits">NumOfUnits</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#num_of_units OceanAwsLaunchSpec#num_of_units}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroom.property.cpuPerUnit">CpuPerUnit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#cpu_per_unit OceanAwsLaunchSpec#cpu_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroom.property.gpuPerUnit">GpuPerUnit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#gpu_per_unit OceanAwsLaunchSpec#gpu_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroom.property.memoryPerUnit">MemoryPerUnit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#memory_per_unit OceanAwsLaunchSpec#memory_per_unit}. |

---

##### `NumOfUnits`<sup>Required</sup> <a name="NumOfUnits" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroom.property.numOfUnits"></a>

```csharp
public double NumOfUnits { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#num_of_units OceanAwsLaunchSpec#num_of_units}.

---

##### `CpuPerUnit`<sup>Optional</sup> <a name="CpuPerUnit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroom.property.cpuPerUnit"></a>

```csharp
public double CpuPerUnit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#cpu_per_unit OceanAwsLaunchSpec#cpu_per_unit}.

---

##### `GpuPerUnit`<sup>Optional</sup> <a name="GpuPerUnit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroom.property.gpuPerUnit"></a>

```csharp
public double GpuPerUnit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#gpu_per_unit OceanAwsLaunchSpec#gpu_per_unit}.

---

##### `MemoryPerUnit`<sup>Optional</sup> <a name="MemoryPerUnit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroom.property.memoryPerUnit"></a>

```csharp
public double MemoryPerUnit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#memory_per_unit OceanAwsLaunchSpec#memory_per_unit}.

---

### OceanAwsLaunchSpecStrategy <a name="OceanAwsLaunchSpecStrategy" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLaunchSpecStrategy {
    double SpotPercentage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategy.property.spotPercentage">SpotPercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#spot_percentage OceanAwsLaunchSpec#spot_percentage}. |

---

##### `SpotPercentage`<sup>Optional</sup> <a name="SpotPercentage" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategy.property.spotPercentage"></a>

```csharp
public double SpotPercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#spot_percentage OceanAwsLaunchSpec#spot_percentage}.

---

### OceanAwsLaunchSpecTags <a name="OceanAwsLaunchSpecTags" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLaunchSpecTags {
    string Key,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#key OceanAwsLaunchSpec#key}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#value OceanAwsLaunchSpec#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#key OceanAwsLaunchSpec#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#value OceanAwsLaunchSpec#value}.

---

### OceanAwsLaunchSpecTaints <a name="OceanAwsLaunchSpecTaints" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLaunchSpecTaints {
    string Effect,
    string Key,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaints.property.effect">Effect</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#effect OceanAwsLaunchSpec#effect}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaints.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#key OceanAwsLaunchSpec#key}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaints.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#value OceanAwsLaunchSpec#value}. |

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaints.property.effect"></a>

```csharp
public string Effect { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#effect OceanAwsLaunchSpec#effect}.

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaints.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#key OceanAwsLaunchSpec#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaints.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#value OceanAwsLaunchSpec#value}.

---

### OceanAwsLaunchSpecUpdatePolicy <a name="OceanAwsLaunchSpecUpdatePolicy" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLaunchSpecUpdatePolicy {
    object ShouldRoll,
    OceanAwsLaunchSpecUpdatePolicyRollConfig RollConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicy.property.shouldRoll">ShouldRoll</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#should_roll OceanAwsLaunchSpec#should_roll}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicy.property.rollConfig">RollConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfig">OceanAwsLaunchSpecUpdatePolicyRollConfig</a></code> | roll_config block. |

---

##### `ShouldRoll`<sup>Required</sup> <a name="ShouldRoll" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicy.property.shouldRoll"></a>

```csharp
public object ShouldRoll { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#should_roll OceanAwsLaunchSpec#should_roll}.

---

##### `RollConfig`<sup>Optional</sup> <a name="RollConfig" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicy.property.rollConfig"></a>

```csharp
public OceanAwsLaunchSpecUpdatePolicyRollConfig RollConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfig">OceanAwsLaunchSpecUpdatePolicyRollConfig</a>

roll_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#roll_config OceanAwsLaunchSpec#roll_config}

---

### OceanAwsLaunchSpecUpdatePolicyRollConfig <a name="OceanAwsLaunchSpecUpdatePolicyRollConfig" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLaunchSpecUpdatePolicyRollConfig {
    double BatchSizePercentage
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfig.property.batchSizePercentage">BatchSizePercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#batch_size_percentage OceanAwsLaunchSpec#batch_size_percentage}. |

---

##### `BatchSizePercentage`<sup>Required</sup> <a name="BatchSizePercentage" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfig.property.batchSizePercentage"></a>

```csharp
public double BatchSizePercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_launch_spec#batch_size_percentage OceanAwsLaunchSpec#batch_size_percentage}.

---

## Classes <a name="Classes" id="Classes"></a>

### OceanAwsLaunchSpecAutoscaleDownList <a name="OceanAwsLaunchSpecAutoscaleDownList" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLaunchSpecAutoscaleDownList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.get"></a>

```csharp
private OceanAwsLaunchSpecAutoscaleDownOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAwsLaunchSpecAutoscaleDownOutputReference <a name="OceanAwsLaunchSpecAutoscaleDownOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLaunchSpecAutoscaleDownOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.resetMaxScaleDownPercentage">ResetMaxScaleDownPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxScaleDownPercentage` <a name="ResetMaxScaleDownPercentage" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.resetMaxScaleDownPercentage"></a>

```csharp
private void ResetMaxScaleDownPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.property.maxScaleDownPercentageInput">MaxScaleDownPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.property.maxScaleDownPercentage">MaxScaleDownPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxScaleDownPercentageInput`<sup>Optional</sup> <a name="MaxScaleDownPercentageInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.property.maxScaleDownPercentageInput"></a>

```csharp
public double MaxScaleDownPercentageInput { get; }
```

- *Type:* double

---

##### `MaxScaleDownPercentage`<sup>Required</sup> <a name="MaxScaleDownPercentage" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.property.maxScaleDownPercentage"></a>

```csharp
public double MaxScaleDownPercentage { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList <a name="OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.get"></a>

```csharp
private OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference <a name="OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.resetAutoHeadroomPercentage">ResetAutoHeadroomPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutoHeadroomPercentage` <a name="ResetAutoHeadroomPercentage" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.resetAutoHeadroomPercentage"></a>

```csharp
private void ResetAutoHeadroomPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.property.autoHeadroomPercentageInput">AutoHeadroomPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.property.autoHeadroomPercentage">AutoHeadroomPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoHeadroomPercentageInput`<sup>Optional</sup> <a name="AutoHeadroomPercentageInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.property.autoHeadroomPercentageInput"></a>

```csharp
public double AutoHeadroomPercentageInput { get; }
```

- *Type:* double

---

##### `AutoHeadroomPercentage`<sup>Required</sup> <a name="AutoHeadroomPercentage" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.property.autoHeadroomPercentage"></a>

```csharp
public double AutoHeadroomPercentage { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAwsLaunchSpecAutoscaleHeadroomsList <a name="OceanAwsLaunchSpecAutoscaleHeadroomsList" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLaunchSpecAutoscaleHeadroomsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.get"></a>

```csharp
private OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference <a name="OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.resetCpuPerUnit">ResetCpuPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.resetGpuPerUnit">ResetGpuPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.resetMemoryPerUnit">ResetMemoryPerUnit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpuPerUnit` <a name="ResetCpuPerUnit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.resetCpuPerUnit"></a>

```csharp
private void ResetCpuPerUnit()
```

##### `ResetGpuPerUnit` <a name="ResetGpuPerUnit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.resetGpuPerUnit"></a>

```csharp
private void ResetGpuPerUnit()
```

##### `ResetMemoryPerUnit` <a name="ResetMemoryPerUnit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.resetMemoryPerUnit"></a>

```csharp
private void ResetMemoryPerUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.cpuPerUnitInput">CpuPerUnitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.gpuPerUnitInput">GpuPerUnitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.memoryPerUnitInput">MemoryPerUnitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.numOfUnitsInput">NumOfUnitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.cpuPerUnit">CpuPerUnit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.gpuPerUnit">GpuPerUnit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.memoryPerUnit">MemoryPerUnit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.numOfUnits">NumOfUnits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CpuPerUnitInput`<sup>Optional</sup> <a name="CpuPerUnitInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.cpuPerUnitInput"></a>

```csharp
public double CpuPerUnitInput { get; }
```

- *Type:* double

---

##### `GpuPerUnitInput`<sup>Optional</sup> <a name="GpuPerUnitInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.gpuPerUnitInput"></a>

```csharp
public double GpuPerUnitInput { get; }
```

- *Type:* double

---

##### `MemoryPerUnitInput`<sup>Optional</sup> <a name="MemoryPerUnitInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.memoryPerUnitInput"></a>

```csharp
public double MemoryPerUnitInput { get; }
```

- *Type:* double

---

##### `NumOfUnitsInput`<sup>Optional</sup> <a name="NumOfUnitsInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.numOfUnitsInput"></a>

```csharp
public double NumOfUnitsInput { get; }
```

- *Type:* double

---

##### `CpuPerUnit`<sup>Required</sup> <a name="CpuPerUnit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.cpuPerUnit"></a>

```csharp
public double CpuPerUnit { get; }
```

- *Type:* double

---

##### `GpuPerUnit`<sup>Required</sup> <a name="GpuPerUnit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.gpuPerUnit"></a>

```csharp
public double GpuPerUnit { get; }
```

- *Type:* double

---

##### `MemoryPerUnit`<sup>Required</sup> <a name="MemoryPerUnit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.memoryPerUnit"></a>

```csharp
public double MemoryPerUnit { get; }
```

- *Type:* double

---

##### `NumOfUnits`<sup>Required</sup> <a name="NumOfUnits" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.numOfUnits"></a>

```csharp
public double NumOfUnits { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference <a name="OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.baseSizeInput">BaseSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.resourceInput">ResourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.sizePerResourceUnitInput">SizePerResourceUnitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.baseSize">BaseSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.resource">Resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.sizePerResourceUnit">SizePerResourceUnit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize">OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BaseSizeInput`<sup>Optional</sup> <a name="BaseSizeInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.baseSizeInput"></a>

```csharp
public double BaseSizeInput { get; }
```

- *Type:* double

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.resourceInput"></a>

```csharp
public string ResourceInput { get; }
```

- *Type:* string

---

##### `SizePerResourceUnitInput`<sup>Optional</sup> <a name="SizePerResourceUnitInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.sizePerResourceUnitInput"></a>

```csharp
public double SizePerResourceUnitInput { get; }
```

- *Type:* double

---

##### `BaseSize`<sup>Required</sup> <a name="BaseSize" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.baseSize"></a>

```csharp
public double BaseSize { get; }
```

- *Type:* double

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.resource"></a>

```csharp
public string Resource { get; }
```

- *Type:* string

---

##### `SizePerResourceUnit`<sup>Required</sup> <a name="SizePerResourceUnit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.sizePerResourceUnit"></a>

```csharp
public double SizePerResourceUnit { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.internalValue"></a>

```csharp
public OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize">OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize</a>

---


### OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference <a name="OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.putDynamicVolumeSize">PutDynamicVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetDeleteOnTermination">ResetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetDynamicVolumeSize">ResetDynamicVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetEncrypted">ResetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetSnapshotId">ResetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetThroughput">ResetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetVolumeSize">ResetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetVolumeType">ResetVolumeType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDynamicVolumeSize` <a name="PutDynamicVolumeSize" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.putDynamicVolumeSize"></a>

```csharp
private void PutDynamicVolumeSize(OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.putDynamicVolumeSize.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize">OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize</a>

---

##### `ResetDeleteOnTermination` <a name="ResetDeleteOnTermination" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetDeleteOnTermination"></a>

```csharp
private void ResetDeleteOnTermination()
```

##### `ResetDynamicVolumeSize` <a name="ResetDynamicVolumeSize" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetDynamicVolumeSize"></a>

```csharp
private void ResetDynamicVolumeSize()
```

##### `ResetEncrypted` <a name="ResetEncrypted" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetEncrypted"></a>

```csharp
private void ResetEncrypted()
```

##### `ResetIops` <a name="ResetIops" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetIops"></a>

```csharp
private void ResetIops()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetSnapshotId` <a name="ResetSnapshotId" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetSnapshotId"></a>

```csharp
private void ResetSnapshotId()
```

##### `ResetThroughput` <a name="ResetThroughput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetThroughput"></a>

```csharp
private void ResetThroughput()
```

##### `ResetVolumeSize` <a name="ResetVolumeSize" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetVolumeSize"></a>

```csharp
private void ResetVolumeSize()
```

##### `ResetVolumeType` <a name="ResetVolumeType" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetVolumeType"></a>

```csharp
private void ResetVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.dynamicVolumeSize">DynamicVolumeSize</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference">OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.deleteOnTerminationInput">DeleteOnTerminationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.dynamicVolumeSizeInput">DynamicVolumeSizeInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize">OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.encryptedInput">EncryptedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.iopsInput">IopsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.snapshotIdInput">SnapshotIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.throughputInput">ThroughputInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput">VolumeSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput">VolumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.encrypted">Encrypted</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.iops">Iops</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.snapshotId">SnapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.throughput">Throughput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.volumeSize">VolumeSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.volumeType">VolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs">OceanAwsLaunchSpecBlockDeviceMappingsEbs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DynamicVolumeSize`<sup>Required</sup> <a name="DynamicVolumeSize" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.dynamicVolumeSize"></a>

```csharp
public OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference DynamicVolumeSize { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference">OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference</a>

---

##### `DeleteOnTerminationInput`<sup>Optional</sup> <a name="DeleteOnTerminationInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.deleteOnTerminationInput"></a>

```csharp
public object DeleteOnTerminationInput { get; }
```

- *Type:* object

---

##### `DynamicVolumeSizeInput`<sup>Optional</sup> <a name="DynamicVolumeSizeInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.dynamicVolumeSizeInput"></a>

```csharp
public OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize DynamicVolumeSizeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize">OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize</a>

---

##### `EncryptedInput`<sup>Optional</sup> <a name="EncryptedInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.encryptedInput"></a>

```csharp
public object EncryptedInput { get; }
```

- *Type:* object

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.iopsInput"></a>

```csharp
public double IopsInput { get; }
```

- *Type:* double

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `SnapshotIdInput`<sup>Optional</sup> <a name="SnapshotIdInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.snapshotIdInput"></a>

```csharp
public string SnapshotIdInput { get; }
```

- *Type:* string

---

##### `ThroughputInput`<sup>Optional</sup> <a name="ThroughputInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.throughputInput"></a>

```csharp
public double ThroughputInput { get; }
```

- *Type:* double

---

##### `VolumeSizeInput`<sup>Optional</sup> <a name="VolumeSizeInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput"></a>

```csharp
public double VolumeSizeInput { get; }
```

- *Type:* double

---

##### `VolumeTypeInput`<sup>Optional</sup> <a name="VolumeTypeInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput"></a>

```csharp
public string VolumeTypeInput { get; }
```

- *Type:* string

---

##### `DeleteOnTermination`<sup>Required</sup> <a name="DeleteOnTermination" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination"></a>

```csharp
public object DeleteOnTermination { get; }
```

- *Type:* object

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.encrypted"></a>

```csharp
public object Encrypted { get; }
```

- *Type:* object

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.iops"></a>

```csharp
public double Iops { get; }
```

- *Type:* double

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `SnapshotId`<sup>Required</sup> <a name="SnapshotId" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.snapshotId"></a>

```csharp
public string SnapshotId { get; }
```

- *Type:* string

---

##### `Throughput`<sup>Required</sup> <a name="Throughput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.throughput"></a>

```csharp
public double Throughput { get; }
```

- *Type:* double

---

##### `VolumeSize`<sup>Required</sup> <a name="VolumeSize" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.volumeSize"></a>

```csharp
public double VolumeSize { get; }
```

- *Type:* double

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.volumeType"></a>

```csharp
public string VolumeType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.internalValue"></a>

```csharp
public OceanAwsLaunchSpecBlockDeviceMappingsEbs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs">OceanAwsLaunchSpecBlockDeviceMappingsEbs</a>

---


### OceanAwsLaunchSpecBlockDeviceMappingsList <a name="OceanAwsLaunchSpecBlockDeviceMappingsList" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLaunchSpecBlockDeviceMappingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.get"></a>

```csharp
private OceanAwsLaunchSpecBlockDeviceMappingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAwsLaunchSpecBlockDeviceMappingsOutputReference <a name="OceanAwsLaunchSpecBlockDeviceMappingsOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLaunchSpecBlockDeviceMappingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.putEbs">PutEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.resetDeviceName">ResetDeviceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.resetEbs">ResetEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.resetNoDevice">ResetNoDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.resetVirtualName">ResetVirtualName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEbs` <a name="PutEbs" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.putEbs"></a>

```csharp
private void PutEbs(OceanAwsLaunchSpecBlockDeviceMappingsEbs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.putEbs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs">OceanAwsLaunchSpecBlockDeviceMappingsEbs</a>

---

##### `ResetDeviceName` <a name="ResetDeviceName" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.resetDeviceName"></a>

```csharp
private void ResetDeviceName()
```

##### `ResetEbs` <a name="ResetEbs" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.resetEbs"></a>

```csharp
private void ResetEbs()
```

##### `ResetNoDevice` <a name="ResetNoDevice" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.resetNoDevice"></a>

```csharp
private void ResetNoDevice()
```

##### `ResetVirtualName` <a name="ResetVirtualName" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.resetVirtualName"></a>

```csharp
private void ResetVirtualName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.ebs">Ebs</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference">OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.deviceNameInput">DeviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.ebsInput">EbsInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs">OceanAwsLaunchSpecBlockDeviceMappingsEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.noDeviceInput">NoDeviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.virtualNameInput">VirtualNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.deviceName">DeviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.noDevice">NoDevice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.virtualName">VirtualName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ebs`<sup>Required</sup> <a name="Ebs" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.ebs"></a>

```csharp
public OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference Ebs { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference">OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference</a>

---

##### `DeviceNameInput`<sup>Optional</sup> <a name="DeviceNameInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.deviceNameInput"></a>

```csharp
public string DeviceNameInput { get; }
```

- *Type:* string

---

##### `EbsInput`<sup>Optional</sup> <a name="EbsInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.ebsInput"></a>

```csharp
public OceanAwsLaunchSpecBlockDeviceMappingsEbs EbsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs">OceanAwsLaunchSpecBlockDeviceMappingsEbs</a>

---

##### `NoDeviceInput`<sup>Optional</sup> <a name="NoDeviceInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.noDeviceInput"></a>

```csharp
public string NoDeviceInput { get; }
```

- *Type:* string

---

##### `VirtualNameInput`<sup>Optional</sup> <a name="VirtualNameInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.virtualNameInput"></a>

```csharp
public string VirtualNameInput { get; }
```

- *Type:* string

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.deviceName"></a>

```csharp
public string DeviceName { get; }
```

- *Type:* string

---

##### `NoDevice`<sup>Required</sup> <a name="NoDevice" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.noDevice"></a>

```csharp
public string NoDevice { get; }
```

- *Type:* string

---

##### `VirtualName`<sup>Required</sup> <a name="VirtualName" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.virtualName"></a>

```csharp
public string VirtualName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAwsLaunchSpecCreateOptionsOutputReference <a name="OceanAwsLaunchSpecCreateOptionsOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLaunchSpecCreateOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.resetInitialNodes">ResetInitialNodes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInitialNodes` <a name="ResetInitialNodes" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.resetInitialNodes"></a>

```csharp
private void ResetInitialNodes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.property.initialNodesInput">InitialNodesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.property.initialNodes">InitialNodes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptions">OceanAwsLaunchSpecCreateOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InitialNodesInput`<sup>Optional</sup> <a name="InitialNodesInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.property.initialNodesInput"></a>

```csharp
public double InitialNodesInput { get; }
```

- *Type:* double

---

##### `InitialNodes`<sup>Required</sup> <a name="InitialNodes" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.property.initialNodes"></a>

```csharp
public double InitialNodes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.property.internalValue"></a>

```csharp
public OceanAwsLaunchSpecCreateOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptions">OceanAwsLaunchSpecCreateOptions</a>

---


### OceanAwsLaunchSpecDeleteOptionsOutputReference <a name="OceanAwsLaunchSpecDeleteOptionsOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLaunchSpecDeleteOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.resetDeleteNodes">ResetDeleteNodes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeleteNodes` <a name="ResetDeleteNodes" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.resetDeleteNodes"></a>

```csharp
private void ResetDeleteNodes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.property.deleteNodesInput">DeleteNodesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.property.forceDeleteInput">ForceDeleteInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.property.deleteNodes">DeleteNodes</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.property.forceDelete">ForceDelete</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptions">OceanAwsLaunchSpecDeleteOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeleteNodesInput`<sup>Optional</sup> <a name="DeleteNodesInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.property.deleteNodesInput"></a>

```csharp
public object DeleteNodesInput { get; }
```

- *Type:* object

---

##### `ForceDeleteInput`<sup>Optional</sup> <a name="ForceDeleteInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.property.forceDeleteInput"></a>

```csharp
public object ForceDeleteInput { get; }
```

- *Type:* object

---

##### `DeleteNodes`<sup>Required</sup> <a name="DeleteNodes" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.property.deleteNodes"></a>

```csharp
public object DeleteNodes { get; }
```

- *Type:* object

---

##### `ForceDelete`<sup>Required</sup> <a name="ForceDelete" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.property.forceDelete"></a>

```csharp
public object ForceDelete { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.property.internalValue"></a>

```csharp
public OceanAwsLaunchSpecDeleteOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptions">OceanAwsLaunchSpecDeleteOptions</a>

---


### OceanAwsLaunchSpecElasticIpPoolList <a name="OceanAwsLaunchSpecElasticIpPoolList" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLaunchSpecElasticIpPoolList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.get"></a>

```csharp
private OceanAwsLaunchSpecElasticIpPoolOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAwsLaunchSpecElasticIpPoolOutputReference <a name="OceanAwsLaunchSpecElasticIpPoolOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLaunchSpecElasticIpPoolOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.putTagSelector">PutTagSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.resetTagSelector">ResetTagSelector</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTagSelector` <a name="PutTagSelector" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.putTagSelector"></a>

```csharp
private void PutTagSelector(OceanAwsLaunchSpecElasticIpPoolTagSelector Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.putTagSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelector">OceanAwsLaunchSpecElasticIpPoolTagSelector</a>

---

##### `ResetTagSelector` <a name="ResetTagSelector" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.resetTagSelector"></a>

```csharp
private void ResetTagSelector()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.property.tagSelector">TagSelector</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference">OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.property.tagSelectorInput">TagSelectorInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelector">OceanAwsLaunchSpecElasticIpPoolTagSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TagSelector`<sup>Required</sup> <a name="TagSelector" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.property.tagSelector"></a>

```csharp
public OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference TagSelector { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference">OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference</a>

---

##### `TagSelectorInput`<sup>Optional</sup> <a name="TagSelectorInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.property.tagSelectorInput"></a>

```csharp
public OceanAwsLaunchSpecElasticIpPoolTagSelector TagSelectorInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelector">OceanAwsLaunchSpecElasticIpPoolTagSelector</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference <a name="OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.resetTagValue">ResetTagValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTagValue` <a name="ResetTagValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.resetTagValue"></a>

```csharp
private void ResetTagValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.property.tagKeyInput">TagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.property.tagValueInput">TagValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.property.tagKey">TagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.property.tagValue">TagValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelector">OceanAwsLaunchSpecElasticIpPoolTagSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TagKeyInput`<sup>Optional</sup> <a name="TagKeyInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.property.tagKeyInput"></a>

```csharp
public string TagKeyInput { get; }
```

- *Type:* string

---

##### `TagValueInput`<sup>Optional</sup> <a name="TagValueInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.property.tagValueInput"></a>

```csharp
public string TagValueInput { get; }
```

- *Type:* string

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.property.tagKey"></a>

```csharp
public string TagKey { get; }
```

- *Type:* string

---

##### `TagValue`<sup>Required</sup> <a name="TagValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.property.tagValue"></a>

```csharp
public string TagValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.property.internalValue"></a>

```csharp
public OceanAwsLaunchSpecElasticIpPoolTagSelector InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelector">OceanAwsLaunchSpecElasticIpPoolTagSelector</a>

---


### OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference <a name="OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.resetHttpPutResponseHopLimit">ResetHttpPutResponseHopLimit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHttpPutResponseHopLimit` <a name="ResetHttpPutResponseHopLimit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.resetHttpPutResponseHopLimit"></a>

```csharp
private void ResetHttpPutResponseHopLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput">HttpPutResponseHopLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.property.httpTokensInput">HttpTokensInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit">HttpPutResponseHopLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.property.httpTokens">HttpTokens</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptions">OceanAwsLaunchSpecInstanceMetadataOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HttpPutResponseHopLimitInput`<sup>Optional</sup> <a name="HttpPutResponseHopLimitInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput"></a>

```csharp
public double HttpPutResponseHopLimitInput { get; }
```

- *Type:* double

---

##### `HttpTokensInput`<sup>Optional</sup> <a name="HttpTokensInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.property.httpTokensInput"></a>

```csharp
public string HttpTokensInput { get; }
```

- *Type:* string

---

##### `HttpPutResponseHopLimit`<sup>Required</sup> <a name="HttpPutResponseHopLimit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit"></a>

```csharp
public double HttpPutResponseHopLimit { get; }
```

- *Type:* double

---

##### `HttpTokens`<sup>Required</sup> <a name="HttpTokens" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.property.httpTokens"></a>

```csharp
public string HttpTokens { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.property.internalValue"></a>

```csharp
public OceanAwsLaunchSpecInstanceMetadataOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptions">OceanAwsLaunchSpecInstanceMetadataOptions</a>

---


### OceanAwsLaunchSpecLabelsList <a name="OceanAwsLaunchSpecLabelsList" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLaunchSpecLabelsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.get"></a>

```csharp
private OceanAwsLaunchSpecLabelsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAwsLaunchSpecLabelsOutputReference <a name="OceanAwsLaunchSpecLabelsOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLaunchSpecLabelsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAwsLaunchSpecResourceLimitsList <a name="OceanAwsLaunchSpecResourceLimitsList" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLaunchSpecResourceLimitsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.get"></a>

```csharp
private OceanAwsLaunchSpecResourceLimitsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAwsLaunchSpecResourceLimitsOutputReference <a name="OceanAwsLaunchSpecResourceLimitsOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLaunchSpecResourceLimitsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.resetMaxInstanceCount">ResetMaxInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.resetMinInstanceCount">ResetMinInstanceCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxInstanceCount` <a name="ResetMaxInstanceCount" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.resetMaxInstanceCount"></a>

```csharp
private void ResetMaxInstanceCount()
```

##### `ResetMinInstanceCount` <a name="ResetMinInstanceCount" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.resetMinInstanceCount"></a>

```csharp
private void ResetMinInstanceCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.property.maxInstanceCountInput">MaxInstanceCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.property.minInstanceCountInput">MinInstanceCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.property.maxInstanceCount">MaxInstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.property.minInstanceCount">MinInstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInstanceCountInput`<sup>Optional</sup> <a name="MaxInstanceCountInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.property.maxInstanceCountInput"></a>

```csharp
public double MaxInstanceCountInput { get; }
```

- *Type:* double

---

##### `MinInstanceCountInput`<sup>Optional</sup> <a name="MinInstanceCountInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.property.minInstanceCountInput"></a>

```csharp
public double MinInstanceCountInput { get; }
```

- *Type:* double

---

##### `MaxInstanceCount`<sup>Required</sup> <a name="MaxInstanceCount" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.property.maxInstanceCount"></a>

```csharp
public double MaxInstanceCount { get; }
```

- *Type:* double

---

##### `MinInstanceCount`<sup>Required</sup> <a name="MinInstanceCount" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.property.minInstanceCount"></a>

```csharp
public double MinInstanceCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference <a name="OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.resetIsEnabled"></a>

```csharp
private void ResetIsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.property.timeWindowsInput">TimeWindowsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.property.isEnabled">IsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.property.timeWindows">TimeWindows</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHours">OceanAwsLaunchSpecSchedulingShutdownHours</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.property.isEnabledInput"></a>

```csharp
public object IsEnabledInput { get; }
```

- *Type:* object

---

##### `TimeWindowsInput`<sup>Optional</sup> <a name="TimeWindowsInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.property.timeWindowsInput"></a>

```csharp
public string[] TimeWindowsInput { get; }
```

- *Type:* string[]

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.property.isEnabled"></a>

```csharp
public object IsEnabled { get; }
```

- *Type:* object

---

##### `TimeWindows`<sup>Required</sup> <a name="TimeWindows" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.property.timeWindows"></a>

```csharp
public string[] TimeWindows { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.property.internalValue"></a>

```csharp
public OceanAwsLaunchSpecSchedulingShutdownHours InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHours">OceanAwsLaunchSpecSchedulingShutdownHours</a>

---


### OceanAwsLaunchSpecSchedulingTaskList <a name="OceanAwsLaunchSpecSchedulingTaskList" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLaunchSpecSchedulingTaskList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.get"></a>

```csharp
private OceanAwsLaunchSpecSchedulingTaskOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAwsLaunchSpecSchedulingTaskOutputReference <a name="OceanAwsLaunchSpecSchedulingTaskOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLaunchSpecSchedulingTaskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.putTaskHeadroom">PutTaskHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.resetTaskHeadroom">ResetTaskHeadroom</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTaskHeadroom` <a name="PutTaskHeadroom" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.putTaskHeadroom"></a>

```csharp
private void PutTaskHeadroom(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.putTaskHeadroom.parameter.value"></a>

- *Type:* object

---

##### `ResetTaskHeadroom` <a name="ResetTaskHeadroom" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.resetTaskHeadroom"></a>

```csharp
private void ResetTaskHeadroom()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.taskHeadroom">TaskHeadroom</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList">OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.cronExpressionInput">CronExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.taskHeadroomInput">TaskHeadroomInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.taskTypeInput">TaskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.cronExpression">CronExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.isEnabled">IsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.taskType">TaskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TaskHeadroom`<sup>Required</sup> <a name="TaskHeadroom" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.taskHeadroom"></a>

```csharp
public OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList TaskHeadroom { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList">OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList</a>

---

##### `CronExpressionInput`<sup>Optional</sup> <a name="CronExpressionInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.cronExpressionInput"></a>

```csharp
public string CronExpressionInput { get; }
```

- *Type:* string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.isEnabledInput"></a>

```csharp
public object IsEnabledInput { get; }
```

- *Type:* object

---

##### `TaskHeadroomInput`<sup>Optional</sup> <a name="TaskHeadroomInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.taskHeadroomInput"></a>

```csharp
public object TaskHeadroomInput { get; }
```

- *Type:* object

---

##### `TaskTypeInput`<sup>Optional</sup> <a name="TaskTypeInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.taskTypeInput"></a>

```csharp
public string TaskTypeInput { get; }
```

- *Type:* string

---

##### `CronExpression`<sup>Required</sup> <a name="CronExpression" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.cronExpression"></a>

```csharp
public string CronExpression { get; }
```

- *Type:* string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.isEnabled"></a>

```csharp
public object IsEnabled { get; }
```

- *Type:* object

---

##### `TaskType`<sup>Required</sup> <a name="TaskType" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.taskType"></a>

```csharp
public string TaskType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList <a name="OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.get"></a>

```csharp
private OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference <a name="OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.resetCpuPerUnit">ResetCpuPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.resetGpuPerUnit">ResetGpuPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.resetMemoryPerUnit">ResetMemoryPerUnit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpuPerUnit` <a name="ResetCpuPerUnit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.resetCpuPerUnit"></a>

```csharp
private void ResetCpuPerUnit()
```

##### `ResetGpuPerUnit` <a name="ResetGpuPerUnit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.resetGpuPerUnit"></a>

```csharp
private void ResetGpuPerUnit()
```

##### `ResetMemoryPerUnit` <a name="ResetMemoryPerUnit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.resetMemoryPerUnit"></a>

```csharp
private void ResetMemoryPerUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.cpuPerUnitInput">CpuPerUnitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.gpuPerUnitInput">GpuPerUnitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.memoryPerUnitInput">MemoryPerUnitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.numOfUnitsInput">NumOfUnitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.cpuPerUnit">CpuPerUnit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.gpuPerUnit">GpuPerUnit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.memoryPerUnit">MemoryPerUnit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.numOfUnits">NumOfUnits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CpuPerUnitInput`<sup>Optional</sup> <a name="CpuPerUnitInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.cpuPerUnitInput"></a>

```csharp
public double CpuPerUnitInput { get; }
```

- *Type:* double

---

##### `GpuPerUnitInput`<sup>Optional</sup> <a name="GpuPerUnitInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.gpuPerUnitInput"></a>

```csharp
public double GpuPerUnitInput { get; }
```

- *Type:* double

---

##### `MemoryPerUnitInput`<sup>Optional</sup> <a name="MemoryPerUnitInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.memoryPerUnitInput"></a>

```csharp
public double MemoryPerUnitInput { get; }
```

- *Type:* double

---

##### `NumOfUnitsInput`<sup>Optional</sup> <a name="NumOfUnitsInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.numOfUnitsInput"></a>

```csharp
public double NumOfUnitsInput { get; }
```

- *Type:* double

---

##### `CpuPerUnit`<sup>Required</sup> <a name="CpuPerUnit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.cpuPerUnit"></a>

```csharp
public double CpuPerUnit { get; }
```

- *Type:* double

---

##### `GpuPerUnit`<sup>Required</sup> <a name="GpuPerUnit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.gpuPerUnit"></a>

```csharp
public double GpuPerUnit { get; }
```

- *Type:* double

---

##### `MemoryPerUnit`<sup>Required</sup> <a name="MemoryPerUnit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.memoryPerUnit"></a>

```csharp
public double MemoryPerUnit { get; }
```

- *Type:* double

---

##### `NumOfUnits`<sup>Required</sup> <a name="NumOfUnits" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.numOfUnits"></a>

```csharp
public double NumOfUnits { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAwsLaunchSpecStrategyList <a name="OceanAwsLaunchSpecStrategyList" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLaunchSpecStrategyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.get"></a>

```csharp
private OceanAwsLaunchSpecStrategyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAwsLaunchSpecStrategyOutputReference <a name="OceanAwsLaunchSpecStrategyOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLaunchSpecStrategyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.resetSpotPercentage">ResetSpotPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSpotPercentage` <a name="ResetSpotPercentage" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.resetSpotPercentage"></a>

```csharp
private void ResetSpotPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.property.spotPercentageInput">SpotPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.property.spotPercentage">SpotPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SpotPercentageInput`<sup>Optional</sup> <a name="SpotPercentageInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.property.spotPercentageInput"></a>

```csharp
public double SpotPercentageInput { get; }
```

- *Type:* double

---

##### `SpotPercentage`<sup>Required</sup> <a name="SpotPercentage" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.property.spotPercentage"></a>

```csharp
public double SpotPercentage { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAwsLaunchSpecTagsList <a name="OceanAwsLaunchSpecTagsList" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLaunchSpecTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.get"></a>

```csharp
private OceanAwsLaunchSpecTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAwsLaunchSpecTagsOutputReference <a name="OceanAwsLaunchSpecTagsOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLaunchSpecTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAwsLaunchSpecTaintsList <a name="OceanAwsLaunchSpecTaintsList" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLaunchSpecTaintsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.get"></a>

```csharp
private OceanAwsLaunchSpecTaintsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAwsLaunchSpecTaintsOutputReference <a name="OceanAwsLaunchSpecTaintsOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLaunchSpecTaintsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.property.effectInput">EffectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.property.effect">Effect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EffectInput`<sup>Optional</sup> <a name="EffectInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.property.effectInput"></a>

```csharp
public string EffectInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.property.effect"></a>

```csharp
public string Effect { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAwsLaunchSpecUpdatePolicyOutputReference <a name="OceanAwsLaunchSpecUpdatePolicyOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLaunchSpecUpdatePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.putRollConfig">PutRollConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.resetRollConfig">ResetRollConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRollConfig` <a name="PutRollConfig" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.putRollConfig"></a>

```csharp
private void PutRollConfig(OceanAwsLaunchSpecUpdatePolicyRollConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.putRollConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfig">OceanAwsLaunchSpecUpdatePolicyRollConfig</a>

---

##### `ResetRollConfig` <a name="ResetRollConfig" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.resetRollConfig"></a>

```csharp
private void ResetRollConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.property.rollConfig">RollConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference">OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.property.rollConfigInput">RollConfigInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfig">OceanAwsLaunchSpecUpdatePolicyRollConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.property.shouldRollInput">ShouldRollInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.property.shouldRoll">ShouldRoll</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicy">OceanAwsLaunchSpecUpdatePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RollConfig`<sup>Required</sup> <a name="RollConfig" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.property.rollConfig"></a>

```csharp
public OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference RollConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference">OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference</a>

---

##### `RollConfigInput`<sup>Optional</sup> <a name="RollConfigInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.property.rollConfigInput"></a>

```csharp
public OceanAwsLaunchSpecUpdatePolicyRollConfig RollConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfig">OceanAwsLaunchSpecUpdatePolicyRollConfig</a>

---

##### `ShouldRollInput`<sup>Optional</sup> <a name="ShouldRollInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.property.shouldRollInput"></a>

```csharp
public object ShouldRollInput { get; }
```

- *Type:* object

---

##### `ShouldRoll`<sup>Required</sup> <a name="ShouldRoll" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.property.shouldRoll"></a>

```csharp
public object ShouldRoll { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.property.internalValue"></a>

```csharp
public OceanAwsLaunchSpecUpdatePolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicy">OceanAwsLaunchSpecUpdatePolicy</a>

---


### OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference <a name="OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.property.batchSizePercentageInput">BatchSizePercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.property.batchSizePercentage">BatchSizePercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfig">OceanAwsLaunchSpecUpdatePolicyRollConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BatchSizePercentageInput`<sup>Optional</sup> <a name="BatchSizePercentageInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.property.batchSizePercentageInput"></a>

```csharp
public double BatchSizePercentageInput { get; }
```

- *Type:* double

---

##### `BatchSizePercentage`<sup>Required</sup> <a name="BatchSizePercentage" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.property.batchSizePercentage"></a>

```csharp
public double BatchSizePercentage { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.property.internalValue"></a>

```csharp
public OceanAwsLaunchSpecUpdatePolicyRollConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfig">OceanAwsLaunchSpecUpdatePolicyRollConfig</a>

---



