# `spotinst_ocean_ecs`

Refer to the Terraform Registory for docs: [`spotinst_ocean_ecs`](https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs).

# `oceanEcs` Submodule <a name="`oceanEcs` Submodule" id="@cdktf/provider-spotinst.oceanEcs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OceanEcs <a name="OceanEcs" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs spotinst_ocean_ecs}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanEcs(Construct Scope, string Id, OceanEcsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig">OceanEcsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig">OceanEcsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.putAutoscaler">PutAutoscaler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.putBlockDeviceMappings">PutBlockDeviceMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.putClusterOrientation">PutClusterOrientation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.putFilters">PutFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.putInstanceMetadataOptions">PutInstanceMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.putLogging">PutLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.putOptimizeImages">PutOptimizeImages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.putScheduledTask">PutScheduledTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.putUpdatePolicy">PutUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetAssociatePublicIpAddress">ResetAssociatePublicIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetAutoscaler">ResetAutoscaler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetBlacklist">ResetBlacklist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetBlockDeviceMappings">ResetBlockDeviceMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetClusterOrientation">ResetClusterOrientation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetDesiredCapacity">ResetDesiredCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetDrainingTimeout">ResetDrainingTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetEbsOptimized">ResetEbsOptimized</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetFilters">ResetFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetIamInstanceProfile">ResetIamInstanceProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetImageId">ResetImageId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetInstanceMetadataOptions">ResetInstanceMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetKeyPair">ResetKeyPair</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetLogging">ResetLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetMaxSize">ResetMaxSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetMinSize">ResetMinSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetMonitoring">ResetMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetOptimizeImages">ResetOptimizeImages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetScheduledTask">ResetScheduledTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetSpotPercentage">ResetSpotPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetUpdatePolicy">ResetUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetUseAsTemplateOnly">ResetUseAsTemplateOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetUserData">ResetUserData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetUtilizeCommitments">ResetUtilizeCommitments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetUtilizeReservedInstances">ResetUtilizeReservedInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetWhitelist">ResetWhitelist</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAutoscaler` <a name="PutAutoscaler" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putAutoscaler"></a>

```csharp
private void PutAutoscaler(OceanEcsAutoscaler Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putAutoscaler.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler">OceanEcsAutoscaler</a>

---

##### `PutBlockDeviceMappings` <a name="PutBlockDeviceMappings" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putBlockDeviceMappings"></a>

```csharp
private void PutBlockDeviceMappings(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putBlockDeviceMappings.parameter.value"></a>

- *Type:* object

---

##### `PutClusterOrientation` <a name="PutClusterOrientation" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putClusterOrientation"></a>

```csharp
private void PutClusterOrientation(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putClusterOrientation.parameter.value"></a>

- *Type:* object

---

##### `PutFilters` <a name="PutFilters" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putFilters"></a>

```csharp
private void PutFilters(OceanEcsFilters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putFilters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters">OceanEcsFilters</a>

---

##### `PutInstanceMetadataOptions` <a name="PutInstanceMetadataOptions" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putInstanceMetadataOptions"></a>

```csharp
private void PutInstanceMetadataOptions(OceanEcsInstanceMetadataOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putInstanceMetadataOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptions">OceanEcsInstanceMetadataOptions</a>

---

##### `PutLogging` <a name="PutLogging" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putLogging"></a>

```csharp
private void PutLogging(OceanEcsLogging Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putLogging.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLogging">OceanEcsLogging</a>

---

##### `PutOptimizeImages` <a name="PutOptimizeImages" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putOptimizeImages"></a>

```csharp
private void PutOptimizeImages(OceanEcsOptimizeImages Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putOptimizeImages.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImages">OceanEcsOptimizeImages</a>

---

##### `PutScheduledTask` <a name="PutScheduledTask" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putScheduledTask"></a>

```csharp
private void PutScheduledTask(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putScheduledTask.parameter.value"></a>

- *Type:* object

---

##### `PutTags` <a name="PutTags" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putTags"></a>

```csharp
private void PutTags(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putTags.parameter.value"></a>

- *Type:* object

---

##### `PutUpdatePolicy` <a name="PutUpdatePolicy" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putUpdatePolicy"></a>

```csharp
private void PutUpdatePolicy(OceanEcsUpdatePolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.putUpdatePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicy">OceanEcsUpdatePolicy</a>

---

##### `ResetAssociatePublicIpAddress` <a name="ResetAssociatePublicIpAddress" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetAssociatePublicIpAddress"></a>

```csharp
private void ResetAssociatePublicIpAddress()
```

##### `ResetAutoscaler` <a name="ResetAutoscaler" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetAutoscaler"></a>

```csharp
private void ResetAutoscaler()
```

##### `ResetBlacklist` <a name="ResetBlacklist" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetBlacklist"></a>

```csharp
private void ResetBlacklist()
```

##### `ResetBlockDeviceMappings` <a name="ResetBlockDeviceMappings" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetBlockDeviceMappings"></a>

```csharp
private void ResetBlockDeviceMappings()
```

##### `ResetClusterOrientation` <a name="ResetClusterOrientation" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetClusterOrientation"></a>

```csharp
private void ResetClusterOrientation()
```

##### `ResetDesiredCapacity` <a name="ResetDesiredCapacity" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetDesiredCapacity"></a>

```csharp
private void ResetDesiredCapacity()
```

##### `ResetDrainingTimeout` <a name="ResetDrainingTimeout" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetDrainingTimeout"></a>

```csharp
private void ResetDrainingTimeout()
```

##### `ResetEbsOptimized` <a name="ResetEbsOptimized" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetEbsOptimized"></a>

```csharp
private void ResetEbsOptimized()
```

##### `ResetFilters` <a name="ResetFilters" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetFilters"></a>

```csharp
private void ResetFilters()
```

##### `ResetIamInstanceProfile` <a name="ResetIamInstanceProfile" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetIamInstanceProfile"></a>

```csharp
private void ResetIamInstanceProfile()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetImageId` <a name="ResetImageId" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetImageId"></a>

```csharp
private void ResetImageId()
```

##### `ResetInstanceMetadataOptions` <a name="ResetInstanceMetadataOptions" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetInstanceMetadataOptions"></a>

```csharp
private void ResetInstanceMetadataOptions()
```

##### `ResetKeyPair` <a name="ResetKeyPair" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetKeyPair"></a>

```csharp
private void ResetKeyPair()
```

##### `ResetLogging` <a name="ResetLogging" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetLogging"></a>

```csharp
private void ResetLogging()
```

##### `ResetMaxSize` <a name="ResetMaxSize" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetMaxSize"></a>

```csharp
private void ResetMaxSize()
```

##### `ResetMinSize` <a name="ResetMinSize" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetMinSize"></a>

```csharp
private void ResetMinSize()
```

##### `ResetMonitoring` <a name="ResetMonitoring" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetMonitoring"></a>

```csharp
private void ResetMonitoring()
```

##### `ResetOptimizeImages` <a name="ResetOptimizeImages" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetOptimizeImages"></a>

```csharp
private void ResetOptimizeImages()
```

##### `ResetScheduledTask` <a name="ResetScheduledTask" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetScheduledTask"></a>

```csharp
private void ResetScheduledTask()
```

##### `ResetSpotPercentage` <a name="ResetSpotPercentage" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetSpotPercentage"></a>

```csharp
private void ResetSpotPercentage()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetUpdatePolicy` <a name="ResetUpdatePolicy" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetUpdatePolicy"></a>

```csharp
private void ResetUpdatePolicy()
```

##### `ResetUseAsTemplateOnly` <a name="ResetUseAsTemplateOnly" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetUseAsTemplateOnly"></a>

```csharp
private void ResetUseAsTemplateOnly()
```

##### `ResetUserData` <a name="ResetUserData" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetUserData"></a>

```csharp
private void ResetUserData()
```

##### `ResetUtilizeCommitments` <a name="ResetUtilizeCommitments" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetUtilizeCommitments"></a>

```csharp
private void ResetUtilizeCommitments()
```

##### `ResetUtilizeReservedInstances` <a name="ResetUtilizeReservedInstances" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetUtilizeReservedInstances"></a>

```csharp
private void ResetUtilizeReservedInstances()
```

##### `ResetWhitelist` <a name="ResetWhitelist" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.resetWhitelist"></a>

```csharp
private void ResetWhitelist()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

OceanEcs.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

OceanEcs.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

OceanEcs.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.autoscaler">Autoscaler</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference">OceanEcsAutoscalerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.blockDeviceMappings">BlockDeviceMappings</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList">OceanEcsBlockDeviceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.clusterOrientation">ClusterOrientation</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList">OceanEcsClusterOrientationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.filters">Filters</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference">OceanEcsFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.instanceMetadataOptions">InstanceMetadataOptions</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference">OceanEcsInstanceMetadataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.logging">Logging</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference">OceanEcsLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.optimizeImages">OptimizeImages</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference">OceanEcsOptimizeImagesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.scheduledTask">ScheduledTask</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList">OceanEcsScheduledTaskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList">OceanEcsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.updatePolicy">UpdatePolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference">OceanEcsUpdatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.associatePublicIpAddressInput">AssociatePublicIpAddressInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.autoscalerInput">AutoscalerInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler">OceanEcsAutoscaler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.blacklistInput">BlacklistInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.blockDeviceMappingsInput">BlockDeviceMappingsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.clusterNameInput">ClusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.clusterOrientationInput">ClusterOrientationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.desiredCapacityInput">DesiredCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.drainingTimeoutInput">DrainingTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.ebsOptimizedInput">EbsOptimizedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.filtersInput">FiltersInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters">OceanEcsFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.iamInstanceProfileInput">IamInstanceProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.imageIdInput">ImageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.instanceMetadataOptionsInput">InstanceMetadataOptionsInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptions">OceanEcsInstanceMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.keyPairInput">KeyPairInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.loggingInput">LoggingInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLogging">OceanEcsLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.maxSizeInput">MaxSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.minSizeInput">MinSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.monitoringInput">MonitoringInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.optimizeImagesInput">OptimizeImagesInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImages">OceanEcsOptimizeImages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.scheduledTaskInput">ScheduledTaskInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.spotPercentageInput">SpotPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.tagsInput">TagsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.updatePolicyInput">UpdatePolicyInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicy">OceanEcsUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.useAsTemplateOnlyInput">UseAsTemplateOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.userDataInput">UserDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.utilizeCommitmentsInput">UtilizeCommitmentsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.utilizeReservedInstancesInput">UtilizeReservedInstancesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.whitelistInput">WhitelistInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.associatePublicIpAddress">AssociatePublicIpAddress</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.blacklist">Blacklist</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.clusterName">ClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.desiredCapacity">DesiredCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.drainingTimeout">DrainingTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.ebsOptimized">EbsOptimized</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.iamInstanceProfile">IamInstanceProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.imageId">ImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.keyPair">KeyPair</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.maxSize">MaxSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.minSize">MinSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.monitoring">Monitoring</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.spotPercentage">SpotPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.useAsTemplateOnly">UseAsTemplateOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.userData">UserData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.utilizeCommitments">UtilizeCommitments</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.utilizeReservedInstances">UtilizeReservedInstances</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.whitelist">Whitelist</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Autoscaler`<sup>Required</sup> <a name="Autoscaler" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.autoscaler"></a>

```csharp
public OceanEcsAutoscalerOutputReference Autoscaler { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference">OceanEcsAutoscalerOutputReference</a>

---

##### `BlockDeviceMappings`<sup>Required</sup> <a name="BlockDeviceMappings" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.blockDeviceMappings"></a>

```csharp
public OceanEcsBlockDeviceMappingsList BlockDeviceMappings { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList">OceanEcsBlockDeviceMappingsList</a>

---

##### `ClusterOrientation`<sup>Required</sup> <a name="ClusterOrientation" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.clusterOrientation"></a>

```csharp
public OceanEcsClusterOrientationList ClusterOrientation { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList">OceanEcsClusterOrientationList</a>

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.filters"></a>

```csharp
public OceanEcsFiltersOutputReference Filters { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference">OceanEcsFiltersOutputReference</a>

---

##### `InstanceMetadataOptions`<sup>Required</sup> <a name="InstanceMetadataOptions" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.instanceMetadataOptions"></a>

```csharp
public OceanEcsInstanceMetadataOptionsOutputReference InstanceMetadataOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference">OceanEcsInstanceMetadataOptionsOutputReference</a>

---

##### `Logging`<sup>Required</sup> <a name="Logging" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.logging"></a>

```csharp
public OceanEcsLoggingOutputReference Logging { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference">OceanEcsLoggingOutputReference</a>

---

##### `OptimizeImages`<sup>Required</sup> <a name="OptimizeImages" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.optimizeImages"></a>

```csharp
public OceanEcsOptimizeImagesOutputReference OptimizeImages { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference">OceanEcsOptimizeImagesOutputReference</a>

---

##### `ScheduledTask`<sup>Required</sup> <a name="ScheduledTask" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.scheduledTask"></a>

```csharp
public OceanEcsScheduledTaskList ScheduledTask { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList">OceanEcsScheduledTaskList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.tags"></a>

```csharp
public OceanEcsTagsList Tags { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList">OceanEcsTagsList</a>

---

##### `UpdatePolicy`<sup>Required</sup> <a name="UpdatePolicy" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.updatePolicy"></a>

```csharp
public OceanEcsUpdatePolicyOutputReference UpdatePolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference">OceanEcsUpdatePolicyOutputReference</a>

---

##### `AssociatePublicIpAddressInput`<sup>Optional</sup> <a name="AssociatePublicIpAddressInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.associatePublicIpAddressInput"></a>

```csharp
public object AssociatePublicIpAddressInput { get; }
```

- *Type:* object

---

##### `AutoscalerInput`<sup>Optional</sup> <a name="AutoscalerInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.autoscalerInput"></a>

```csharp
public OceanEcsAutoscaler AutoscalerInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler">OceanEcsAutoscaler</a>

---

##### `BlacklistInput`<sup>Optional</sup> <a name="BlacklistInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.blacklistInput"></a>

```csharp
public string[] BlacklistInput { get; }
```

- *Type:* string[]

---

##### `BlockDeviceMappingsInput`<sup>Optional</sup> <a name="BlockDeviceMappingsInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.blockDeviceMappingsInput"></a>

```csharp
public object BlockDeviceMappingsInput { get; }
```

- *Type:* object

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.clusterNameInput"></a>

```csharp
public string ClusterNameInput { get; }
```

- *Type:* string

---

##### `ClusterOrientationInput`<sup>Optional</sup> <a name="ClusterOrientationInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.clusterOrientationInput"></a>

```csharp
public object ClusterOrientationInput { get; }
```

- *Type:* object

---

##### `DesiredCapacityInput`<sup>Optional</sup> <a name="DesiredCapacityInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.desiredCapacityInput"></a>

```csharp
public double DesiredCapacityInput { get; }
```

- *Type:* double

---

##### `DrainingTimeoutInput`<sup>Optional</sup> <a name="DrainingTimeoutInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.drainingTimeoutInput"></a>

```csharp
public double DrainingTimeoutInput { get; }
```

- *Type:* double

---

##### `EbsOptimizedInput`<sup>Optional</sup> <a name="EbsOptimizedInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.ebsOptimizedInput"></a>

```csharp
public object EbsOptimizedInput { get; }
```

- *Type:* object

---

##### `FiltersInput`<sup>Optional</sup> <a name="FiltersInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.filtersInput"></a>

```csharp
public OceanEcsFilters FiltersInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters">OceanEcsFilters</a>

---

##### `IamInstanceProfileInput`<sup>Optional</sup> <a name="IamInstanceProfileInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.iamInstanceProfileInput"></a>

```csharp
public string IamInstanceProfileInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImageIdInput`<sup>Optional</sup> <a name="ImageIdInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.imageIdInput"></a>

```csharp
public string ImageIdInput { get; }
```

- *Type:* string

---

##### `InstanceMetadataOptionsInput`<sup>Optional</sup> <a name="InstanceMetadataOptionsInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.instanceMetadataOptionsInput"></a>

```csharp
public OceanEcsInstanceMetadataOptions InstanceMetadataOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptions">OceanEcsInstanceMetadataOptions</a>

---

##### `KeyPairInput`<sup>Optional</sup> <a name="KeyPairInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.keyPairInput"></a>

```csharp
public string KeyPairInput { get; }
```

- *Type:* string

---

##### `LoggingInput`<sup>Optional</sup> <a name="LoggingInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.loggingInput"></a>

```csharp
public OceanEcsLogging LoggingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLogging">OceanEcsLogging</a>

---

##### `MaxSizeInput`<sup>Optional</sup> <a name="MaxSizeInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.maxSizeInput"></a>

```csharp
public double MaxSizeInput { get; }
```

- *Type:* double

---

##### `MinSizeInput`<sup>Optional</sup> <a name="MinSizeInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.minSizeInput"></a>

```csharp
public double MinSizeInput { get; }
```

- *Type:* double

---

##### `MonitoringInput`<sup>Optional</sup> <a name="MonitoringInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.monitoringInput"></a>

```csharp
public object MonitoringInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OptimizeImagesInput`<sup>Optional</sup> <a name="OptimizeImagesInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.optimizeImagesInput"></a>

```csharp
public OceanEcsOptimizeImages OptimizeImagesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImages">OceanEcsOptimizeImages</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ScheduledTaskInput`<sup>Optional</sup> <a name="ScheduledTaskInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.scheduledTaskInput"></a>

```csharp
public object ScheduledTaskInput { get; }
```

- *Type:* object

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SpotPercentageInput`<sup>Optional</sup> <a name="SpotPercentageInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.spotPercentageInput"></a>

```csharp
public double SpotPercentageInput { get; }
```

- *Type:* double

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.tagsInput"></a>

```csharp
public object TagsInput { get; }
```

- *Type:* object

---

##### `UpdatePolicyInput`<sup>Optional</sup> <a name="UpdatePolicyInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.updatePolicyInput"></a>

```csharp
public OceanEcsUpdatePolicy UpdatePolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicy">OceanEcsUpdatePolicy</a>

---

##### `UseAsTemplateOnlyInput`<sup>Optional</sup> <a name="UseAsTemplateOnlyInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.useAsTemplateOnlyInput"></a>

```csharp
public object UseAsTemplateOnlyInput { get; }
```

- *Type:* object

---

##### `UserDataInput`<sup>Optional</sup> <a name="UserDataInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.userDataInput"></a>

```csharp
public string UserDataInput { get; }
```

- *Type:* string

---

##### `UtilizeCommitmentsInput`<sup>Optional</sup> <a name="UtilizeCommitmentsInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.utilizeCommitmentsInput"></a>

```csharp
public object UtilizeCommitmentsInput { get; }
```

- *Type:* object

---

##### `UtilizeReservedInstancesInput`<sup>Optional</sup> <a name="UtilizeReservedInstancesInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.utilizeReservedInstancesInput"></a>

```csharp
public object UtilizeReservedInstancesInput { get; }
```

- *Type:* object

---

##### `WhitelistInput`<sup>Optional</sup> <a name="WhitelistInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.whitelistInput"></a>

```csharp
public string[] WhitelistInput { get; }
```

- *Type:* string[]

---

##### `AssociatePublicIpAddress`<sup>Required</sup> <a name="AssociatePublicIpAddress" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.associatePublicIpAddress"></a>

```csharp
public object AssociatePublicIpAddress { get; }
```

- *Type:* object

---

##### `Blacklist`<sup>Required</sup> <a name="Blacklist" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.blacklist"></a>

```csharp
public string[] Blacklist { get; }
```

- *Type:* string[]

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.clusterName"></a>

```csharp
public string ClusterName { get; }
```

- *Type:* string

---

##### `DesiredCapacity`<sup>Required</sup> <a name="DesiredCapacity" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.desiredCapacity"></a>

```csharp
public double DesiredCapacity { get; }
```

- *Type:* double

---

##### `DrainingTimeout`<sup>Required</sup> <a name="DrainingTimeout" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.drainingTimeout"></a>

```csharp
public double DrainingTimeout { get; }
```

- *Type:* double

---

##### `EbsOptimized`<sup>Required</sup> <a name="EbsOptimized" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.ebsOptimized"></a>

```csharp
public object EbsOptimized { get; }
```

- *Type:* object

---

##### `IamInstanceProfile`<sup>Required</sup> <a name="IamInstanceProfile" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.iamInstanceProfile"></a>

```csharp
public string IamInstanceProfile { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.imageId"></a>

```csharp
public string ImageId { get; }
```

- *Type:* string

---

##### `KeyPair`<sup>Required</sup> <a name="KeyPair" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.keyPair"></a>

```csharp
public string KeyPair { get; }
```

- *Type:* string

---

##### `MaxSize`<sup>Required</sup> <a name="MaxSize" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.maxSize"></a>

```csharp
public double MaxSize { get; }
```

- *Type:* double

---

##### `MinSize`<sup>Required</sup> <a name="MinSize" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.minSize"></a>

```csharp
public double MinSize { get; }
```

- *Type:* double

---

##### `Monitoring`<sup>Required</sup> <a name="Monitoring" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.monitoring"></a>

```csharp
public object Monitoring { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SpotPercentage`<sup>Required</sup> <a name="SpotPercentage" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.spotPercentage"></a>

```csharp
public double SpotPercentage { get; }
```

- *Type:* double

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `UseAsTemplateOnly`<sup>Required</sup> <a name="UseAsTemplateOnly" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.useAsTemplateOnly"></a>

```csharp
public object UseAsTemplateOnly { get; }
```

- *Type:* object

---

##### `UserData`<sup>Required</sup> <a name="UserData" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.userData"></a>

```csharp
public string UserData { get; }
```

- *Type:* string

---

##### `UtilizeCommitments`<sup>Required</sup> <a name="UtilizeCommitments" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.utilizeCommitments"></a>

```csharp
public object UtilizeCommitments { get; }
```

- *Type:* object

---

##### `UtilizeReservedInstances`<sup>Required</sup> <a name="UtilizeReservedInstances" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.utilizeReservedInstances"></a>

```csharp
public object UtilizeReservedInstances { get; }
```

- *Type:* object

---

##### `Whitelist`<sup>Required</sup> <a name="Whitelist" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.whitelist"></a>

```csharp
public string[] Whitelist { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-spotinst.oceanEcs.OceanEcs.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OceanEcsAutoscaler <a name="OceanEcsAutoscaler" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanEcsAutoscaler {
    double AutoHeadroomPercentage = null,
    double Cooldown = null,
    OceanEcsAutoscalerDown Down = null,
    object EnableAutomaticAndManualHeadroom = null,
    OceanEcsAutoscalerHeadroom Headroom = null,
    object IsAutoConfig = null,
    object IsEnabled = null,
    OceanEcsAutoscalerResourceLimits ResourceLimits = null,
    object ShouldScaleDownNonServiceTasks = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler.property.autoHeadroomPercentage">AutoHeadroomPercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#auto_headroom_percentage OceanEcs#auto_headroom_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler.property.cooldown">Cooldown</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#cooldown OceanEcs#cooldown}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler.property.down">Down</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDown">OceanEcsAutoscalerDown</a></code> | down block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler.property.enableAutomaticAndManualHeadroom">EnableAutomaticAndManualHeadroom</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#enable_automatic_and_manual_headroom OceanEcs#enable_automatic_and_manual_headroom}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler.property.headroom">Headroom</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroom">OceanEcsAutoscalerHeadroom</a></code> | headroom block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler.property.isAutoConfig">IsAutoConfig</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#is_auto_config OceanEcs#is_auto_config}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler.property.isEnabled">IsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#is_enabled OceanEcs#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler.property.resourceLimits">ResourceLimits</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimits">OceanEcsAutoscalerResourceLimits</a></code> | resource_limits block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler.property.shouldScaleDownNonServiceTasks">ShouldScaleDownNonServiceTasks</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#should_scale_down_non_service_tasks OceanEcs#should_scale_down_non_service_tasks}. |

---

##### `AutoHeadroomPercentage`<sup>Optional</sup> <a name="AutoHeadroomPercentage" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler.property.autoHeadroomPercentage"></a>

```csharp
public double AutoHeadroomPercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#auto_headroom_percentage OceanEcs#auto_headroom_percentage}.

---

##### `Cooldown`<sup>Optional</sup> <a name="Cooldown" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler.property.cooldown"></a>

```csharp
public double Cooldown { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#cooldown OceanEcs#cooldown}.

---

##### `Down`<sup>Optional</sup> <a name="Down" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler.property.down"></a>

```csharp
public OceanEcsAutoscalerDown Down { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDown">OceanEcsAutoscalerDown</a>

down block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#down OceanEcs#down}

---

##### `EnableAutomaticAndManualHeadroom`<sup>Optional</sup> <a name="EnableAutomaticAndManualHeadroom" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler.property.enableAutomaticAndManualHeadroom"></a>

```csharp
public object EnableAutomaticAndManualHeadroom { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#enable_automatic_and_manual_headroom OceanEcs#enable_automatic_and_manual_headroom}.

---

##### `Headroom`<sup>Optional</sup> <a name="Headroom" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler.property.headroom"></a>

```csharp
public OceanEcsAutoscalerHeadroom Headroom { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroom">OceanEcsAutoscalerHeadroom</a>

headroom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#headroom OceanEcs#headroom}

---

##### `IsAutoConfig`<sup>Optional</sup> <a name="IsAutoConfig" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler.property.isAutoConfig"></a>

```csharp
public object IsAutoConfig { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#is_auto_config OceanEcs#is_auto_config}.

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler.property.isEnabled"></a>

```csharp
public object IsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#is_enabled OceanEcs#is_enabled}.

---

##### `ResourceLimits`<sup>Optional</sup> <a name="ResourceLimits" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler.property.resourceLimits"></a>

```csharp
public OceanEcsAutoscalerResourceLimits ResourceLimits { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimits">OceanEcsAutoscalerResourceLimits</a>

resource_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#resource_limits OceanEcs#resource_limits}

---

##### `ShouldScaleDownNonServiceTasks`<sup>Optional</sup> <a name="ShouldScaleDownNonServiceTasks" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler.property.shouldScaleDownNonServiceTasks"></a>

```csharp
public object ShouldScaleDownNonServiceTasks { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#should_scale_down_non_service_tasks OceanEcs#should_scale_down_non_service_tasks}.

---

### OceanEcsAutoscalerDown <a name="OceanEcsAutoscalerDown" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDown"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDown.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanEcsAutoscalerDown {
    double MaxScaleDownPercentage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDown.property.maxScaleDownPercentage">MaxScaleDownPercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#max_scale_down_percentage OceanEcs#max_scale_down_percentage}. |

---

##### `MaxScaleDownPercentage`<sup>Optional</sup> <a name="MaxScaleDownPercentage" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDown.property.maxScaleDownPercentage"></a>

```csharp
public double MaxScaleDownPercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#max_scale_down_percentage OceanEcs#max_scale_down_percentage}.

---

### OceanEcsAutoscalerHeadroom <a name="OceanEcsAutoscalerHeadroom" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroom.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanEcsAutoscalerHeadroom {
    double CpuPerUnit = null,
    double MemoryPerUnit = null,
    double NumOfUnits = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroom.property.cpuPerUnit">CpuPerUnit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#cpu_per_unit OceanEcs#cpu_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroom.property.memoryPerUnit">MemoryPerUnit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#memory_per_unit OceanEcs#memory_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroom.property.numOfUnits">NumOfUnits</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#num_of_units OceanEcs#num_of_units}. |

---

##### `CpuPerUnit`<sup>Optional</sup> <a name="CpuPerUnit" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroom.property.cpuPerUnit"></a>

```csharp
public double CpuPerUnit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#cpu_per_unit OceanEcs#cpu_per_unit}.

---

##### `MemoryPerUnit`<sup>Optional</sup> <a name="MemoryPerUnit" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroom.property.memoryPerUnit"></a>

```csharp
public double MemoryPerUnit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#memory_per_unit OceanEcs#memory_per_unit}.

---

##### `NumOfUnits`<sup>Optional</sup> <a name="NumOfUnits" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroom.property.numOfUnits"></a>

```csharp
public double NumOfUnits { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#num_of_units OceanEcs#num_of_units}.

---

### OceanEcsAutoscalerResourceLimits <a name="OceanEcsAutoscalerResourceLimits" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimits.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanEcsAutoscalerResourceLimits {
    double MaxMemoryGib = null,
    double MaxVcpu = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimits.property.maxMemoryGib">MaxMemoryGib</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#max_memory_gib OceanEcs#max_memory_gib}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimits.property.maxVcpu">MaxVcpu</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#max_vcpu OceanEcs#max_vcpu}. |

---

##### `MaxMemoryGib`<sup>Optional</sup> <a name="MaxMemoryGib" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimits.property.maxMemoryGib"></a>

```csharp
public double MaxMemoryGib { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#max_memory_gib OceanEcs#max_memory_gib}.

---

##### `MaxVcpu`<sup>Optional</sup> <a name="MaxVcpu" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimits.property.maxVcpu"></a>

```csharp
public double MaxVcpu { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#max_vcpu OceanEcs#max_vcpu}.

---

### OceanEcsBlockDeviceMappings <a name="OceanEcsBlockDeviceMappings" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanEcsBlockDeviceMappings {
    string DeviceName,
    OceanEcsBlockDeviceMappingsEbs Ebs = null,
    string NoDevice = null,
    string VirtualName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappings.property.deviceName">DeviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#device_name OceanEcs#device_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappings.property.ebs">Ebs</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs">OceanEcsBlockDeviceMappingsEbs</a></code> | ebs block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappings.property.noDevice">NoDevice</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#no_device OceanEcs#no_device}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappings.property.virtualName">VirtualName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#virtual_name OceanEcs#virtual_name}. |

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappings.property.deviceName"></a>

```csharp
public string DeviceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#device_name OceanEcs#device_name}.

---

##### `Ebs`<sup>Optional</sup> <a name="Ebs" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappings.property.ebs"></a>

```csharp
public OceanEcsBlockDeviceMappingsEbs Ebs { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs">OceanEcsBlockDeviceMappingsEbs</a>

ebs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#ebs OceanEcs#ebs}

---

##### `NoDevice`<sup>Optional</sup> <a name="NoDevice" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappings.property.noDevice"></a>

```csharp
public string NoDevice { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#no_device OceanEcs#no_device}.

---

##### `VirtualName`<sup>Optional</sup> <a name="VirtualName" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappings.property.virtualName"></a>

```csharp
public string VirtualName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#virtual_name OceanEcs#virtual_name}.

---

### OceanEcsBlockDeviceMappingsEbs <a name="OceanEcsBlockDeviceMappingsEbs" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanEcsBlockDeviceMappingsEbs {
    object DeleteOnTermination = null,
    OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize DynamicVolumeSize = null,
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
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#delete_on_termination OceanEcs#delete_on_termination}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs.property.dynamicVolumeSize">DynamicVolumeSize</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize">OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize</a></code> | dynamic_volume_size block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs.property.encrypted">Encrypted</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#encrypted OceanEcs#encrypted}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs.property.iops">Iops</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#iops OceanEcs#iops}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#kms_key_id OceanEcs#kms_key_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs.property.snapshotId">SnapshotId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#snapshot_id OceanEcs#snapshot_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs.property.throughput">Throughput</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#throughput OceanEcs#throughput}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs.property.volumeSize">VolumeSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#volume_size OceanEcs#volume_size}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs.property.volumeType">VolumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#volume_type OceanEcs#volume_type}. |

---

##### `DeleteOnTermination`<sup>Optional</sup> <a name="DeleteOnTermination" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs.property.deleteOnTermination"></a>

```csharp
public object DeleteOnTermination { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#delete_on_termination OceanEcs#delete_on_termination}.

---

##### `DynamicVolumeSize`<sup>Optional</sup> <a name="DynamicVolumeSize" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs.property.dynamicVolumeSize"></a>

```csharp
public OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize DynamicVolumeSize { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize">OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize</a>

dynamic_volume_size block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#dynamic_volume_size OceanEcs#dynamic_volume_size}

---

##### `Encrypted`<sup>Optional</sup> <a name="Encrypted" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs.property.encrypted"></a>

```csharp
public object Encrypted { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#encrypted OceanEcs#encrypted}.

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs.property.iops"></a>

```csharp
public double Iops { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#iops OceanEcs#iops}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#kms_key_id OceanEcs#kms_key_id}.

---

##### `SnapshotId`<sup>Optional</sup> <a name="SnapshotId" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs.property.snapshotId"></a>

```csharp
public string SnapshotId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#snapshot_id OceanEcs#snapshot_id}.

---

##### `Throughput`<sup>Optional</sup> <a name="Throughput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs.property.throughput"></a>

```csharp
public double Throughput { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#throughput OceanEcs#throughput}.

---

##### `VolumeSize`<sup>Optional</sup> <a name="VolumeSize" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs.property.volumeSize"></a>

```csharp
public double VolumeSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#volume_size OceanEcs#volume_size}.

---

##### `VolumeType`<sup>Optional</sup> <a name="VolumeType" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs.property.volumeType"></a>

```csharp
public string VolumeType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#volume_type OceanEcs#volume_type}.

---

### OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize <a name="OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize {
    double BaseSize,
    string Resource,
    double SizePerResourceUnit
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize.property.baseSize">BaseSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#base_size OceanEcs#base_size}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize.property.resource">Resource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#resource OceanEcs#resource}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize.property.sizePerResourceUnit">SizePerResourceUnit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#size_per_resource_unit OceanEcs#size_per_resource_unit}. |

---

##### `BaseSize`<sup>Required</sup> <a name="BaseSize" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize.property.baseSize"></a>

```csharp
public double BaseSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#base_size OceanEcs#base_size}.

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize.property.resource"></a>

```csharp
public string Resource { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#resource OceanEcs#resource}.

---

##### `SizePerResourceUnit`<sup>Required</sup> <a name="SizePerResourceUnit" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize.property.sizePerResourceUnit"></a>

```csharp
public double SizePerResourceUnit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#size_per_resource_unit OceanEcs#size_per_resource_unit}.

---

### OceanEcsClusterOrientation <a name="OceanEcsClusterOrientation" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanEcsClusterOrientation {
    string AvailabilityVsCost = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientation.property.availabilityVsCost">AvailabilityVsCost</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#availability_vs_cost OceanEcs#availability_vs_cost}. |

---

##### `AvailabilityVsCost`<sup>Optional</sup> <a name="AvailabilityVsCost" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientation.property.availabilityVsCost"></a>

```csharp
public string AvailabilityVsCost { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#availability_vs_cost OceanEcs#availability_vs_cost}.

---

### OceanEcsConfig <a name="OceanEcsConfig" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanEcsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClusterName,
    string Name,
    string Region,
    string[] SecurityGroupIds,
    string[] SubnetIds,
    object AssociatePublicIpAddress = null,
    OceanEcsAutoscaler Autoscaler = null,
    string[] Blacklist = null,
    object BlockDeviceMappings = null,
    object ClusterOrientation = null,
    double DesiredCapacity = null,
    double DrainingTimeout = null,
    object EbsOptimized = null,
    OceanEcsFilters Filters = null,
    string IamInstanceProfile = null,
    string Id = null,
    string ImageId = null,
    OceanEcsInstanceMetadataOptions InstanceMetadataOptions = null,
    string KeyPair = null,
    OceanEcsLogging Logging = null,
    double MaxSize = null,
    double MinSize = null,
    object Monitoring = null,
    OceanEcsOptimizeImages OptimizeImages = null,
    object ScheduledTask = null,
    double SpotPercentage = null,
    object Tags = null,
    OceanEcsUpdatePolicy UpdatePolicy = null,
    object UseAsTemplateOnly = null,
    string UserData = null,
    object UtilizeCommitments = null,
    object UtilizeReservedInstances = null,
    string[] Whitelist = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.clusterName">ClusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#cluster_name OceanEcs#cluster_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#name OceanEcs#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#region OceanEcs#region}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#security_group_ids OceanEcs#security_group_ids}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#subnet_ids OceanEcs#subnet_ids}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.associatePublicIpAddress">AssociatePublicIpAddress</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#associate_public_ip_address OceanEcs#associate_public_ip_address}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.autoscaler">Autoscaler</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler">OceanEcsAutoscaler</a></code> | autoscaler block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.blacklist">Blacklist</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#blacklist OceanEcs#blacklist}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.blockDeviceMappings">BlockDeviceMappings</a></code> | <code>object</code> | block_device_mappings block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.clusterOrientation">ClusterOrientation</a></code> | <code>object</code> | cluster_orientation block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.desiredCapacity">DesiredCapacity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#desired_capacity OceanEcs#desired_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.drainingTimeout">DrainingTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#draining_timeout OceanEcs#draining_timeout}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.ebsOptimized">EbsOptimized</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#ebs_optimized OceanEcs#ebs_optimized}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.filters">Filters</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters">OceanEcsFilters</a></code> | filters block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.iamInstanceProfile">IamInstanceProfile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#iam_instance_profile OceanEcs#iam_instance_profile}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#id OceanEcs#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.imageId">ImageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#image_id OceanEcs#image_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.instanceMetadataOptions">InstanceMetadataOptions</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptions">OceanEcsInstanceMetadataOptions</a></code> | instance_metadata_options block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.keyPair">KeyPair</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#key_pair OceanEcs#key_pair}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.logging">Logging</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLogging">OceanEcsLogging</a></code> | logging block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.maxSize">MaxSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#max_size OceanEcs#max_size}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.minSize">MinSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#min_size OceanEcs#min_size}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.monitoring">Monitoring</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#monitoring OceanEcs#monitoring}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.optimizeImages">OptimizeImages</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImages">OceanEcsOptimizeImages</a></code> | optimize_images block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.scheduledTask">ScheduledTask</a></code> | <code>object</code> | scheduled_task block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.spotPercentage">SpotPercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#spot_percentage OceanEcs#spot_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.tags">Tags</a></code> | <code>object</code> | tags block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.updatePolicy">UpdatePolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicy">OceanEcsUpdatePolicy</a></code> | update_policy block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.useAsTemplateOnly">UseAsTemplateOnly</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#use_as_template_only OceanEcs#use_as_template_only}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.userData">UserData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#user_data OceanEcs#user_data}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.utilizeCommitments">UtilizeCommitments</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#utilize_commitments OceanEcs#utilize_commitments}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.utilizeReservedInstances">UtilizeReservedInstances</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#utilize_reserved_instances OceanEcs#utilize_reserved_instances}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.whitelist">Whitelist</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#whitelist OceanEcs#whitelist}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.clusterName"></a>

```csharp
public string ClusterName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#cluster_name OceanEcs#cluster_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#name OceanEcs#name}.

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#region OceanEcs#region}.

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#security_group_ids OceanEcs#security_group_ids}.

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#subnet_ids OceanEcs#subnet_ids}.

---

##### `AssociatePublicIpAddress`<sup>Optional</sup> <a name="AssociatePublicIpAddress" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.associatePublicIpAddress"></a>

```csharp
public object AssociatePublicIpAddress { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#associate_public_ip_address OceanEcs#associate_public_ip_address}.

---

##### `Autoscaler`<sup>Optional</sup> <a name="Autoscaler" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.autoscaler"></a>

```csharp
public OceanEcsAutoscaler Autoscaler { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler">OceanEcsAutoscaler</a>

autoscaler block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#autoscaler OceanEcs#autoscaler}

---

##### `Blacklist`<sup>Optional</sup> <a name="Blacklist" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.blacklist"></a>

```csharp
public string[] Blacklist { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#blacklist OceanEcs#blacklist}.

---

##### `BlockDeviceMappings`<sup>Optional</sup> <a name="BlockDeviceMappings" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.blockDeviceMappings"></a>

```csharp
public object BlockDeviceMappings { get; set; }
```

- *Type:* object

block_device_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#block_device_mappings OceanEcs#block_device_mappings}

---

##### `ClusterOrientation`<sup>Optional</sup> <a name="ClusterOrientation" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.clusterOrientation"></a>

```csharp
public object ClusterOrientation { get; set; }
```

- *Type:* object

cluster_orientation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#cluster_orientation OceanEcs#cluster_orientation}

---

##### `DesiredCapacity`<sup>Optional</sup> <a name="DesiredCapacity" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.desiredCapacity"></a>

```csharp
public double DesiredCapacity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#desired_capacity OceanEcs#desired_capacity}.

---

##### `DrainingTimeout`<sup>Optional</sup> <a name="DrainingTimeout" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.drainingTimeout"></a>

```csharp
public double DrainingTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#draining_timeout OceanEcs#draining_timeout}.

---

##### `EbsOptimized`<sup>Optional</sup> <a name="EbsOptimized" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.ebsOptimized"></a>

```csharp
public object EbsOptimized { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#ebs_optimized OceanEcs#ebs_optimized}.

---

##### `Filters`<sup>Optional</sup> <a name="Filters" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.filters"></a>

```csharp
public OceanEcsFilters Filters { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters">OceanEcsFilters</a>

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#filters OceanEcs#filters}

---

##### `IamInstanceProfile`<sup>Optional</sup> <a name="IamInstanceProfile" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.iamInstanceProfile"></a>

```csharp
public string IamInstanceProfile { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#iam_instance_profile OceanEcs#iam_instance_profile}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#id OceanEcs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImageId`<sup>Optional</sup> <a name="ImageId" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.imageId"></a>

```csharp
public string ImageId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#image_id OceanEcs#image_id}.

---

##### `InstanceMetadataOptions`<sup>Optional</sup> <a name="InstanceMetadataOptions" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.instanceMetadataOptions"></a>

```csharp
public OceanEcsInstanceMetadataOptions InstanceMetadataOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptions">OceanEcsInstanceMetadataOptions</a>

instance_metadata_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#instance_metadata_options OceanEcs#instance_metadata_options}

---

##### `KeyPair`<sup>Optional</sup> <a name="KeyPair" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.keyPair"></a>

```csharp
public string KeyPair { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#key_pair OceanEcs#key_pair}.

---

##### `Logging`<sup>Optional</sup> <a name="Logging" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.logging"></a>

```csharp
public OceanEcsLogging Logging { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLogging">OceanEcsLogging</a>

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#logging OceanEcs#logging}

---

##### `MaxSize`<sup>Optional</sup> <a name="MaxSize" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.maxSize"></a>

```csharp
public double MaxSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#max_size OceanEcs#max_size}.

---

##### `MinSize`<sup>Optional</sup> <a name="MinSize" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.minSize"></a>

```csharp
public double MinSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#min_size OceanEcs#min_size}.

---

##### `Monitoring`<sup>Optional</sup> <a name="Monitoring" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.monitoring"></a>

```csharp
public object Monitoring { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#monitoring OceanEcs#monitoring}.

---

##### `OptimizeImages`<sup>Optional</sup> <a name="OptimizeImages" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.optimizeImages"></a>

```csharp
public OceanEcsOptimizeImages OptimizeImages { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImages">OceanEcsOptimizeImages</a>

optimize_images block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#optimize_images OceanEcs#optimize_images}

---

##### `ScheduledTask`<sup>Optional</sup> <a name="ScheduledTask" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.scheduledTask"></a>

```csharp
public object ScheduledTask { get; set; }
```

- *Type:* object

scheduled_task block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#scheduled_task OceanEcs#scheduled_task}

---

##### `SpotPercentage`<sup>Optional</sup> <a name="SpotPercentage" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.spotPercentage"></a>

```csharp
public double SpotPercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#spot_percentage OceanEcs#spot_percentage}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.tags"></a>

```csharp
public object Tags { get; set; }
```

- *Type:* object

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#tags OceanEcs#tags}

---

##### `UpdatePolicy`<sup>Optional</sup> <a name="UpdatePolicy" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.updatePolicy"></a>

```csharp
public OceanEcsUpdatePolicy UpdatePolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicy">OceanEcsUpdatePolicy</a>

update_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#update_policy OceanEcs#update_policy}

---

##### `UseAsTemplateOnly`<sup>Optional</sup> <a name="UseAsTemplateOnly" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.useAsTemplateOnly"></a>

```csharp
public object UseAsTemplateOnly { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#use_as_template_only OceanEcs#use_as_template_only}.

---

##### `UserData`<sup>Optional</sup> <a name="UserData" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.userData"></a>

```csharp
public string UserData { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#user_data OceanEcs#user_data}.

---

##### `UtilizeCommitments`<sup>Optional</sup> <a name="UtilizeCommitments" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.utilizeCommitments"></a>

```csharp
public object UtilizeCommitments { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#utilize_commitments OceanEcs#utilize_commitments}.

---

##### `UtilizeReservedInstances`<sup>Optional</sup> <a name="UtilizeReservedInstances" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.utilizeReservedInstances"></a>

```csharp
public object UtilizeReservedInstances { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#utilize_reserved_instances OceanEcs#utilize_reserved_instances}.

---

##### `Whitelist`<sup>Optional</sup> <a name="Whitelist" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsConfig.property.whitelist"></a>

```csharp
public string[] Whitelist { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#whitelist OceanEcs#whitelist}.

---

### OceanEcsFilters <a name="OceanEcsFilters" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanEcsFilters {
    string[] Architectures = null,
    string[] Categories = null,
    string[] DiskTypes = null,
    string[] ExcludeFamilies = null,
    object ExcludeMetal = null,
    string[] Hypervisor = null,
    string[] IncludeFamilies = null,
    string IsEnaSupported = null,
    double MaxGpu = null,
    double MaxMemoryGib = null,
    double MaxNetworkPerformance = null,
    double MaxVcpu = null,
    double MinEnis = null,
    double MinGpu = null,
    double MinMemoryGib = null,
    double MinNetworkPerformance = null,
    double MinVcpu = null,
    string[] RootDeviceTypes = null,
    string[] VirtualizationTypes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.architectures">Architectures</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#architectures OceanEcs#architectures}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.categories">Categories</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#categories OceanEcs#categories}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.diskTypes">DiskTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#disk_types OceanEcs#disk_types}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.excludeFamilies">ExcludeFamilies</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#exclude_families OceanEcs#exclude_families}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.excludeMetal">ExcludeMetal</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#exclude_metal OceanEcs#exclude_metal}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.hypervisor">Hypervisor</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#hypervisor OceanEcs#hypervisor}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.includeFamilies">IncludeFamilies</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#include_families OceanEcs#include_families}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.isEnaSupported">IsEnaSupported</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#is_ena_supported OceanEcs#is_ena_supported}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.maxGpu">MaxGpu</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#max_gpu OceanEcs#max_gpu}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.maxMemoryGib">MaxMemoryGib</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#max_memory_gib OceanEcs#max_memory_gib}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.maxNetworkPerformance">MaxNetworkPerformance</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#max_network_performance OceanEcs#max_network_performance}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.maxVcpu">MaxVcpu</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#max_vcpu OceanEcs#max_vcpu}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.minEnis">MinEnis</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#min_enis OceanEcs#min_enis}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.minGpu">MinGpu</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#min_gpu OceanEcs#min_gpu}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.minMemoryGib">MinMemoryGib</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#min_memory_gib OceanEcs#min_memory_gib}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.minNetworkPerformance">MinNetworkPerformance</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#min_network_performance OceanEcs#min_network_performance}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.minVcpu">MinVcpu</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#min_vcpu OceanEcs#min_vcpu}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.rootDeviceTypes">RootDeviceTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#root_device_types OceanEcs#root_device_types}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.virtualizationTypes">VirtualizationTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#virtualization_types OceanEcs#virtualization_types}. |

---

##### `Architectures`<sup>Optional</sup> <a name="Architectures" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.architectures"></a>

```csharp
public string[] Architectures { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#architectures OceanEcs#architectures}.

---

##### `Categories`<sup>Optional</sup> <a name="Categories" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.categories"></a>

```csharp
public string[] Categories { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#categories OceanEcs#categories}.

---

##### `DiskTypes`<sup>Optional</sup> <a name="DiskTypes" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.diskTypes"></a>

```csharp
public string[] DiskTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#disk_types OceanEcs#disk_types}.

---

##### `ExcludeFamilies`<sup>Optional</sup> <a name="ExcludeFamilies" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.excludeFamilies"></a>

```csharp
public string[] ExcludeFamilies { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#exclude_families OceanEcs#exclude_families}.

---

##### `ExcludeMetal`<sup>Optional</sup> <a name="ExcludeMetal" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.excludeMetal"></a>

```csharp
public object ExcludeMetal { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#exclude_metal OceanEcs#exclude_metal}.

---

##### `Hypervisor`<sup>Optional</sup> <a name="Hypervisor" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.hypervisor"></a>

```csharp
public string[] Hypervisor { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#hypervisor OceanEcs#hypervisor}.

---

##### `IncludeFamilies`<sup>Optional</sup> <a name="IncludeFamilies" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.includeFamilies"></a>

```csharp
public string[] IncludeFamilies { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#include_families OceanEcs#include_families}.

---

##### `IsEnaSupported`<sup>Optional</sup> <a name="IsEnaSupported" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.isEnaSupported"></a>

```csharp
public string IsEnaSupported { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#is_ena_supported OceanEcs#is_ena_supported}.

---

##### `MaxGpu`<sup>Optional</sup> <a name="MaxGpu" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.maxGpu"></a>

```csharp
public double MaxGpu { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#max_gpu OceanEcs#max_gpu}.

---

##### `MaxMemoryGib`<sup>Optional</sup> <a name="MaxMemoryGib" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.maxMemoryGib"></a>

```csharp
public double MaxMemoryGib { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#max_memory_gib OceanEcs#max_memory_gib}.

---

##### `MaxNetworkPerformance`<sup>Optional</sup> <a name="MaxNetworkPerformance" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.maxNetworkPerformance"></a>

```csharp
public double MaxNetworkPerformance { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#max_network_performance OceanEcs#max_network_performance}.

---

##### `MaxVcpu`<sup>Optional</sup> <a name="MaxVcpu" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.maxVcpu"></a>

```csharp
public double MaxVcpu { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#max_vcpu OceanEcs#max_vcpu}.

---

##### `MinEnis`<sup>Optional</sup> <a name="MinEnis" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.minEnis"></a>

```csharp
public double MinEnis { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#min_enis OceanEcs#min_enis}.

---

##### `MinGpu`<sup>Optional</sup> <a name="MinGpu" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.minGpu"></a>

```csharp
public double MinGpu { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#min_gpu OceanEcs#min_gpu}.

---

##### `MinMemoryGib`<sup>Optional</sup> <a name="MinMemoryGib" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.minMemoryGib"></a>

```csharp
public double MinMemoryGib { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#min_memory_gib OceanEcs#min_memory_gib}.

---

##### `MinNetworkPerformance`<sup>Optional</sup> <a name="MinNetworkPerformance" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.minNetworkPerformance"></a>

```csharp
public double MinNetworkPerformance { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#min_network_performance OceanEcs#min_network_performance}.

---

##### `MinVcpu`<sup>Optional</sup> <a name="MinVcpu" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.minVcpu"></a>

```csharp
public double MinVcpu { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#min_vcpu OceanEcs#min_vcpu}.

---

##### `RootDeviceTypes`<sup>Optional</sup> <a name="RootDeviceTypes" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.rootDeviceTypes"></a>

```csharp
public string[] RootDeviceTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#root_device_types OceanEcs#root_device_types}.

---

##### `VirtualizationTypes`<sup>Optional</sup> <a name="VirtualizationTypes" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters.property.virtualizationTypes"></a>

```csharp
public string[] VirtualizationTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#virtualization_types OceanEcs#virtualization_types}.

---

### OceanEcsInstanceMetadataOptions <a name="OceanEcsInstanceMetadataOptions" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanEcsInstanceMetadataOptions {
    string HttpTokens,
    double HttpPutResponseHopLimit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptions.property.httpTokens">HttpTokens</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#http_tokens OceanEcs#http_tokens}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptions.property.httpPutResponseHopLimit">HttpPutResponseHopLimit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#http_put_response_hop_limit OceanEcs#http_put_response_hop_limit}. |

---

##### `HttpTokens`<sup>Required</sup> <a name="HttpTokens" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptions.property.httpTokens"></a>

```csharp
public string HttpTokens { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#http_tokens OceanEcs#http_tokens}.

---

##### `HttpPutResponseHopLimit`<sup>Optional</sup> <a name="HttpPutResponseHopLimit" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptions.property.httpPutResponseHopLimit"></a>

```csharp
public double HttpPutResponseHopLimit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#http_put_response_hop_limit OceanEcs#http_put_response_hop_limit}.

---

### OceanEcsLogging <a name="OceanEcsLogging" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLogging.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanEcsLogging {
    OceanEcsLoggingExport Export = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLogging.property.export">Export</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExport">OceanEcsLoggingExport</a></code> | export block. |

---

##### `Export`<sup>Optional</sup> <a name="Export" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLogging.property.export"></a>

```csharp
public OceanEcsLoggingExport Export { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExport">OceanEcsLoggingExport</a>

export block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#export OceanEcs#export}

---

### OceanEcsLoggingExport <a name="OceanEcsLoggingExport" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExport"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExport.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanEcsLoggingExport {
    object S3 = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExport.property.s3">S3</a></code> | <code>object</code> | s3 block. |

---

##### `S3`<sup>Optional</sup> <a name="S3" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExport.property.s3"></a>

```csharp
public object S3 { get; set; }
```

- *Type:* object

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#s3 OceanEcs#s3}

---

### OceanEcsLoggingExportS3 <a name="OceanEcsLoggingExportS3" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanEcsLoggingExportS3 {
    string Id
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#id OceanEcs#id}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#id OceanEcs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### OceanEcsOptimizeImages <a name="OceanEcsOptimizeImages" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImages.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanEcsOptimizeImages {
    string PerformAt,
    object ShouldOptimizeEcsAmi,
    string[] TimeWindows = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImages.property.performAt">PerformAt</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#perform_at OceanEcs#perform_at}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImages.property.shouldOptimizeEcsAmi">ShouldOptimizeEcsAmi</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#should_optimize_ecs_ami OceanEcs#should_optimize_ecs_ami}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImages.property.timeWindows">TimeWindows</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#time_windows OceanEcs#time_windows}. |

---

##### `PerformAt`<sup>Required</sup> <a name="PerformAt" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImages.property.performAt"></a>

```csharp
public string PerformAt { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#perform_at OceanEcs#perform_at}.

---

##### `ShouldOptimizeEcsAmi`<sup>Required</sup> <a name="ShouldOptimizeEcsAmi" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImages.property.shouldOptimizeEcsAmi"></a>

```csharp
public object ShouldOptimizeEcsAmi { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#should_optimize_ecs_ami OceanEcs#should_optimize_ecs_ami}.

---

##### `TimeWindows`<sup>Optional</sup> <a name="TimeWindows" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImages.property.timeWindows"></a>

```csharp
public string[] TimeWindows { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#time_windows OceanEcs#time_windows}.

---

### OceanEcsScheduledTask <a name="OceanEcsScheduledTask" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTask.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanEcsScheduledTask {
    OceanEcsScheduledTaskShutdownHours ShutdownHours = null,
    object Tasks = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTask.property.shutdownHours">ShutdownHours</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHours">OceanEcsScheduledTaskShutdownHours</a></code> | shutdown_hours block. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTask.property.tasks">Tasks</a></code> | <code>object</code> | tasks block. |

---

##### `ShutdownHours`<sup>Optional</sup> <a name="ShutdownHours" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTask.property.shutdownHours"></a>

```csharp
public OceanEcsScheduledTaskShutdownHours ShutdownHours { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHours">OceanEcsScheduledTaskShutdownHours</a>

shutdown_hours block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#shutdown_hours OceanEcs#shutdown_hours}

---

##### `Tasks`<sup>Optional</sup> <a name="Tasks" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTask.property.tasks"></a>

```csharp
public object Tasks { get; set; }
```

- *Type:* object

tasks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#tasks OceanEcs#tasks}

---

### OceanEcsScheduledTaskShutdownHours <a name="OceanEcsScheduledTaskShutdownHours" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHours"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHours.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanEcsScheduledTaskShutdownHours {
    string[] TimeWindows,
    object IsEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHours.property.timeWindows">TimeWindows</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#time_windows OceanEcs#time_windows}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHours.property.isEnabled">IsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#is_enabled OceanEcs#is_enabled}. |

---

##### `TimeWindows`<sup>Required</sup> <a name="TimeWindows" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHours.property.timeWindows"></a>

```csharp
public string[] TimeWindows { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#time_windows OceanEcs#time_windows}.

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHours.property.isEnabled"></a>

```csharp
public object IsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#is_enabled OceanEcs#is_enabled}.

---

### OceanEcsScheduledTaskTasks <a name="OceanEcsScheduledTaskTasks" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanEcsScheduledTaskTasks {
    string CronExpression,
    object IsEnabled,
    string TaskType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasks.property.cronExpression">CronExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#cron_expression OceanEcs#cron_expression}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasks.property.isEnabled">IsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#is_enabled OceanEcs#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasks.property.taskType">TaskType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#task_type OceanEcs#task_type}. |

---

##### `CronExpression`<sup>Required</sup> <a name="CronExpression" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasks.property.cronExpression"></a>

```csharp
public string CronExpression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#cron_expression OceanEcs#cron_expression}.

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasks.property.isEnabled"></a>

```csharp
public object IsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#is_enabled OceanEcs#is_enabled}.

---

##### `TaskType`<sup>Required</sup> <a name="TaskType" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasks.property.taskType"></a>

```csharp
public string TaskType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#task_type OceanEcs#task_type}.

---

### OceanEcsTags <a name="OceanEcsTags" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanEcsTags {
    string Key,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#key OceanEcs#key}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#value OceanEcs#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#key OceanEcs#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#value OceanEcs#value}.

---

### OceanEcsUpdatePolicy <a name="OceanEcsUpdatePolicy" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanEcsUpdatePolicy {
    object ShouldRoll,
    object AutoApplyTags = null,
    object ConditionedRoll = null,
    OceanEcsUpdatePolicyRollConfig RollConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicy.property.shouldRoll">ShouldRoll</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#should_roll OceanEcs#should_roll}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicy.property.autoApplyTags">AutoApplyTags</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#auto_apply_tags OceanEcs#auto_apply_tags}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicy.property.conditionedRoll">ConditionedRoll</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#conditioned_roll OceanEcs#conditioned_roll}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicy.property.rollConfig">RollConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfig">OceanEcsUpdatePolicyRollConfig</a></code> | roll_config block. |

---

##### `ShouldRoll`<sup>Required</sup> <a name="ShouldRoll" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicy.property.shouldRoll"></a>

```csharp
public object ShouldRoll { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#should_roll OceanEcs#should_roll}.

---

##### `AutoApplyTags`<sup>Optional</sup> <a name="AutoApplyTags" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicy.property.autoApplyTags"></a>

```csharp
public object AutoApplyTags { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#auto_apply_tags OceanEcs#auto_apply_tags}.

---

##### `ConditionedRoll`<sup>Optional</sup> <a name="ConditionedRoll" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicy.property.conditionedRoll"></a>

```csharp
public object ConditionedRoll { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#conditioned_roll OceanEcs#conditioned_roll}.

---

##### `RollConfig`<sup>Optional</sup> <a name="RollConfig" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicy.property.rollConfig"></a>

```csharp
public OceanEcsUpdatePolicyRollConfig RollConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfig">OceanEcsUpdatePolicyRollConfig</a>

roll_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#roll_config OceanEcs#roll_config}

---

### OceanEcsUpdatePolicyRollConfig <a name="OceanEcsUpdatePolicyRollConfig" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanEcsUpdatePolicyRollConfig {
    double BatchSizePercentage,
    double BatchMinHealthyPercentage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfig.property.batchSizePercentage">BatchSizePercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#batch_size_percentage OceanEcs#batch_size_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfig.property.batchMinHealthyPercentage">BatchMinHealthyPercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#batch_min_healthy_percentage OceanEcs#batch_min_healthy_percentage}. |

---

##### `BatchSizePercentage`<sup>Required</sup> <a name="BatchSizePercentage" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfig.property.batchSizePercentage"></a>

```csharp
public double BatchSizePercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#batch_size_percentage OceanEcs#batch_size_percentage}.

---

##### `BatchMinHealthyPercentage`<sup>Optional</sup> <a name="BatchMinHealthyPercentage" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfig.property.batchMinHealthyPercentage"></a>

```csharp
public double BatchMinHealthyPercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.131.0/docs/resources/ocean_ecs#batch_min_healthy_percentage OceanEcs#batch_min_healthy_percentage}.

---

## Classes <a name="Classes" id="Classes"></a>

### OceanEcsAutoscalerDownOutputReference <a name="OceanEcsAutoscalerDownOutputReference" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanEcsAutoscalerDownOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.resetMaxScaleDownPercentage">ResetMaxScaleDownPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxScaleDownPercentage` <a name="ResetMaxScaleDownPercentage" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.resetMaxScaleDownPercentage"></a>

```csharp
private void ResetMaxScaleDownPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.property.maxScaleDownPercentageInput">MaxScaleDownPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.property.maxScaleDownPercentage">MaxScaleDownPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDown">OceanEcsAutoscalerDown</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxScaleDownPercentageInput`<sup>Optional</sup> <a name="MaxScaleDownPercentageInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.property.maxScaleDownPercentageInput"></a>

```csharp
public double MaxScaleDownPercentageInput { get; }
```

- *Type:* double

---

##### `MaxScaleDownPercentage`<sup>Required</sup> <a name="MaxScaleDownPercentage" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.property.maxScaleDownPercentage"></a>

```csharp
public double MaxScaleDownPercentage { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference.property.internalValue"></a>

```csharp
public OceanEcsAutoscalerDown InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDown">OceanEcsAutoscalerDown</a>

---


### OceanEcsAutoscalerHeadroomOutputReference <a name="OceanEcsAutoscalerHeadroomOutputReference" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanEcsAutoscalerHeadroomOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.resetCpuPerUnit">ResetCpuPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.resetMemoryPerUnit">ResetMemoryPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.resetNumOfUnits">ResetNumOfUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpuPerUnit` <a name="ResetCpuPerUnit" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.resetCpuPerUnit"></a>

```csharp
private void ResetCpuPerUnit()
```

##### `ResetMemoryPerUnit` <a name="ResetMemoryPerUnit" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.resetMemoryPerUnit"></a>

```csharp
private void ResetMemoryPerUnit()
```

##### `ResetNumOfUnits` <a name="ResetNumOfUnits" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.resetNumOfUnits"></a>

```csharp
private void ResetNumOfUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.property.cpuPerUnitInput">CpuPerUnitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.property.memoryPerUnitInput">MemoryPerUnitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.property.numOfUnitsInput">NumOfUnitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.property.cpuPerUnit">CpuPerUnit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.property.memoryPerUnit">MemoryPerUnit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.property.numOfUnits">NumOfUnits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroom">OceanEcsAutoscalerHeadroom</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CpuPerUnitInput`<sup>Optional</sup> <a name="CpuPerUnitInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.property.cpuPerUnitInput"></a>

```csharp
public double CpuPerUnitInput { get; }
```

- *Type:* double

---

##### `MemoryPerUnitInput`<sup>Optional</sup> <a name="MemoryPerUnitInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.property.memoryPerUnitInput"></a>

```csharp
public double MemoryPerUnitInput { get; }
```

- *Type:* double

---

##### `NumOfUnitsInput`<sup>Optional</sup> <a name="NumOfUnitsInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.property.numOfUnitsInput"></a>

```csharp
public double NumOfUnitsInput { get; }
```

- *Type:* double

---

##### `CpuPerUnit`<sup>Required</sup> <a name="CpuPerUnit" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.property.cpuPerUnit"></a>

```csharp
public double CpuPerUnit { get; }
```

- *Type:* double

---

##### `MemoryPerUnit`<sup>Required</sup> <a name="MemoryPerUnit" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.property.memoryPerUnit"></a>

```csharp
public double MemoryPerUnit { get; }
```

- *Type:* double

---

##### `NumOfUnits`<sup>Required</sup> <a name="NumOfUnits" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.property.numOfUnits"></a>

```csharp
public double NumOfUnits { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference.property.internalValue"></a>

```csharp
public OceanEcsAutoscalerHeadroom InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroom">OceanEcsAutoscalerHeadroom</a>

---


### OceanEcsAutoscalerOutputReference <a name="OceanEcsAutoscalerOutputReference" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanEcsAutoscalerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.putDown">PutDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.putHeadroom">PutHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.putResourceLimits">PutResourceLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resetAutoHeadroomPercentage">ResetAutoHeadroomPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resetCooldown">ResetCooldown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resetDown">ResetDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resetEnableAutomaticAndManualHeadroom">ResetEnableAutomaticAndManualHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resetHeadroom">ResetHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resetIsAutoConfig">ResetIsAutoConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resetResourceLimits">ResetResourceLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resetShouldScaleDownNonServiceTasks">ResetShouldScaleDownNonServiceTasks</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDown` <a name="PutDown" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.putDown"></a>

```csharp
private void PutDown(OceanEcsAutoscalerDown Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.putDown.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDown">OceanEcsAutoscalerDown</a>

---

##### `PutHeadroom` <a name="PutHeadroom" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.putHeadroom"></a>

```csharp
private void PutHeadroom(OceanEcsAutoscalerHeadroom Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.putHeadroom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroom">OceanEcsAutoscalerHeadroom</a>

---

##### `PutResourceLimits` <a name="PutResourceLimits" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.putResourceLimits"></a>

```csharp
private void PutResourceLimits(OceanEcsAutoscalerResourceLimits Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.putResourceLimits.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimits">OceanEcsAutoscalerResourceLimits</a>

---

##### `ResetAutoHeadroomPercentage` <a name="ResetAutoHeadroomPercentage" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resetAutoHeadroomPercentage"></a>

```csharp
private void ResetAutoHeadroomPercentage()
```

##### `ResetCooldown` <a name="ResetCooldown" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resetCooldown"></a>

```csharp
private void ResetCooldown()
```

##### `ResetDown` <a name="ResetDown" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resetDown"></a>

```csharp
private void ResetDown()
```

##### `ResetEnableAutomaticAndManualHeadroom` <a name="ResetEnableAutomaticAndManualHeadroom" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resetEnableAutomaticAndManualHeadroom"></a>

```csharp
private void ResetEnableAutomaticAndManualHeadroom()
```

##### `ResetHeadroom` <a name="ResetHeadroom" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resetHeadroom"></a>

```csharp
private void ResetHeadroom()
```

##### `ResetIsAutoConfig` <a name="ResetIsAutoConfig" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resetIsAutoConfig"></a>

```csharp
private void ResetIsAutoConfig()
```

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resetIsEnabled"></a>

```csharp
private void ResetIsEnabled()
```

##### `ResetResourceLimits` <a name="ResetResourceLimits" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resetResourceLimits"></a>

```csharp
private void ResetResourceLimits()
```

##### `ResetShouldScaleDownNonServiceTasks` <a name="ResetShouldScaleDownNonServiceTasks" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.resetShouldScaleDownNonServiceTasks"></a>

```csharp
private void ResetShouldScaleDownNonServiceTasks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.down">Down</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference">OceanEcsAutoscalerDownOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.headroom">Headroom</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference">OceanEcsAutoscalerHeadroomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.resourceLimits">ResourceLimits</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference">OceanEcsAutoscalerResourceLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.autoHeadroomPercentageInput">AutoHeadroomPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.cooldownInput">CooldownInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.downInput">DownInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDown">OceanEcsAutoscalerDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.enableAutomaticAndManualHeadroomInput">EnableAutomaticAndManualHeadroomInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.headroomInput">HeadroomInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroom">OceanEcsAutoscalerHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.isAutoConfigInput">IsAutoConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.resourceLimitsInput">ResourceLimitsInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimits">OceanEcsAutoscalerResourceLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.shouldScaleDownNonServiceTasksInput">ShouldScaleDownNonServiceTasksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.autoHeadroomPercentage">AutoHeadroomPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.cooldown">Cooldown</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.enableAutomaticAndManualHeadroom">EnableAutomaticAndManualHeadroom</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.isAutoConfig">IsAutoConfig</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.isEnabled">IsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.shouldScaleDownNonServiceTasks">ShouldScaleDownNonServiceTasks</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler">OceanEcsAutoscaler</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Down`<sup>Required</sup> <a name="Down" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.down"></a>

```csharp
public OceanEcsAutoscalerDownOutputReference Down { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDownOutputReference">OceanEcsAutoscalerDownOutputReference</a>

---

##### `Headroom`<sup>Required</sup> <a name="Headroom" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.headroom"></a>

```csharp
public OceanEcsAutoscalerHeadroomOutputReference Headroom { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroomOutputReference">OceanEcsAutoscalerHeadroomOutputReference</a>

---

##### `ResourceLimits`<sup>Required</sup> <a name="ResourceLimits" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.resourceLimits"></a>

```csharp
public OceanEcsAutoscalerResourceLimitsOutputReference ResourceLimits { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference">OceanEcsAutoscalerResourceLimitsOutputReference</a>

---

##### `AutoHeadroomPercentageInput`<sup>Optional</sup> <a name="AutoHeadroomPercentageInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.autoHeadroomPercentageInput"></a>

```csharp
public double AutoHeadroomPercentageInput { get; }
```

- *Type:* double

---

##### `CooldownInput`<sup>Optional</sup> <a name="CooldownInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.cooldownInput"></a>

```csharp
public double CooldownInput { get; }
```

- *Type:* double

---

##### `DownInput`<sup>Optional</sup> <a name="DownInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.downInput"></a>

```csharp
public OceanEcsAutoscalerDown DownInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerDown">OceanEcsAutoscalerDown</a>

---

##### `EnableAutomaticAndManualHeadroomInput`<sup>Optional</sup> <a name="EnableAutomaticAndManualHeadroomInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.enableAutomaticAndManualHeadroomInput"></a>

```csharp
public object EnableAutomaticAndManualHeadroomInput { get; }
```

- *Type:* object

---

##### `HeadroomInput`<sup>Optional</sup> <a name="HeadroomInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.headroomInput"></a>

```csharp
public OceanEcsAutoscalerHeadroom HeadroomInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerHeadroom">OceanEcsAutoscalerHeadroom</a>

---

##### `IsAutoConfigInput`<sup>Optional</sup> <a name="IsAutoConfigInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.isAutoConfigInput"></a>

```csharp
public object IsAutoConfigInput { get; }
```

- *Type:* object

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.isEnabledInput"></a>

```csharp
public object IsEnabledInput { get; }
```

- *Type:* object

---

##### `ResourceLimitsInput`<sup>Optional</sup> <a name="ResourceLimitsInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.resourceLimitsInput"></a>

```csharp
public OceanEcsAutoscalerResourceLimits ResourceLimitsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimits">OceanEcsAutoscalerResourceLimits</a>

---

##### `ShouldScaleDownNonServiceTasksInput`<sup>Optional</sup> <a name="ShouldScaleDownNonServiceTasksInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.shouldScaleDownNonServiceTasksInput"></a>

```csharp
public object ShouldScaleDownNonServiceTasksInput { get; }
```

- *Type:* object

---

##### `AutoHeadroomPercentage`<sup>Required</sup> <a name="AutoHeadroomPercentage" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.autoHeadroomPercentage"></a>

```csharp
public double AutoHeadroomPercentage { get; }
```

- *Type:* double

---

##### `Cooldown`<sup>Required</sup> <a name="Cooldown" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.cooldown"></a>

```csharp
public double Cooldown { get; }
```

- *Type:* double

---

##### `EnableAutomaticAndManualHeadroom`<sup>Required</sup> <a name="EnableAutomaticAndManualHeadroom" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.enableAutomaticAndManualHeadroom"></a>

```csharp
public object EnableAutomaticAndManualHeadroom { get; }
```

- *Type:* object

---

##### `IsAutoConfig`<sup>Required</sup> <a name="IsAutoConfig" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.isAutoConfig"></a>

```csharp
public object IsAutoConfig { get; }
```

- *Type:* object

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.isEnabled"></a>

```csharp
public object IsEnabled { get; }
```

- *Type:* object

---

##### `ShouldScaleDownNonServiceTasks`<sup>Required</sup> <a name="ShouldScaleDownNonServiceTasks" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.shouldScaleDownNonServiceTasks"></a>

```csharp
public object ShouldScaleDownNonServiceTasks { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerOutputReference.property.internalValue"></a>

```csharp
public OceanEcsAutoscaler InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscaler">OceanEcsAutoscaler</a>

---


### OceanEcsAutoscalerResourceLimitsOutputReference <a name="OceanEcsAutoscalerResourceLimitsOutputReference" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanEcsAutoscalerResourceLimitsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.resetMaxMemoryGib">ResetMaxMemoryGib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.resetMaxVcpu">ResetMaxVcpu</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxMemoryGib` <a name="ResetMaxMemoryGib" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.resetMaxMemoryGib"></a>

```csharp
private void ResetMaxMemoryGib()
```

##### `ResetMaxVcpu` <a name="ResetMaxVcpu" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.resetMaxVcpu"></a>

```csharp
private void ResetMaxVcpu()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.property.maxMemoryGibInput">MaxMemoryGibInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.property.maxVcpuInput">MaxVcpuInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.property.maxMemoryGib">MaxMemoryGib</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.property.maxVcpu">MaxVcpu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimits">OceanEcsAutoscalerResourceLimits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxMemoryGibInput`<sup>Optional</sup> <a name="MaxMemoryGibInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.property.maxMemoryGibInput"></a>

```csharp
public double MaxMemoryGibInput { get; }
```

- *Type:* double

---

##### `MaxVcpuInput`<sup>Optional</sup> <a name="MaxVcpuInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.property.maxVcpuInput"></a>

```csharp
public double MaxVcpuInput { get; }
```

- *Type:* double

---

##### `MaxMemoryGib`<sup>Required</sup> <a name="MaxMemoryGib" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.property.maxMemoryGib"></a>

```csharp
public double MaxMemoryGib { get; }
```

- *Type:* double

---

##### `MaxVcpu`<sup>Required</sup> <a name="MaxVcpu" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.property.maxVcpu"></a>

```csharp
public double MaxVcpu { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimitsOutputReference.property.internalValue"></a>

```csharp
public OceanEcsAutoscalerResourceLimits InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsAutoscalerResourceLimits">OceanEcsAutoscalerResourceLimits</a>

---


### OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference <a name="OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.baseSizeInput">BaseSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.resourceInput">ResourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.sizePerResourceUnitInput">SizePerResourceUnitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.baseSize">BaseSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.resource">Resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.sizePerResourceUnit">SizePerResourceUnit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize">OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BaseSizeInput`<sup>Optional</sup> <a name="BaseSizeInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.baseSizeInput"></a>

```csharp
public double BaseSizeInput { get; }
```

- *Type:* double

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.resourceInput"></a>

```csharp
public string ResourceInput { get; }
```

- *Type:* string

---

##### `SizePerResourceUnitInput`<sup>Optional</sup> <a name="SizePerResourceUnitInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.sizePerResourceUnitInput"></a>

```csharp
public double SizePerResourceUnitInput { get; }
```

- *Type:* double

---

##### `BaseSize`<sup>Required</sup> <a name="BaseSize" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.baseSize"></a>

```csharp
public double BaseSize { get; }
```

- *Type:* double

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.resource"></a>

```csharp
public string Resource { get; }
```

- *Type:* string

---

##### `SizePerResourceUnit`<sup>Required</sup> <a name="SizePerResourceUnit" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.sizePerResourceUnit"></a>

```csharp
public double SizePerResourceUnit { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.internalValue"></a>

```csharp
public OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize">OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize</a>

---


### OceanEcsBlockDeviceMappingsEbsOutputReference <a name="OceanEcsBlockDeviceMappingsEbsOutputReference" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanEcsBlockDeviceMappingsEbsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.putDynamicVolumeSize">PutDynamicVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resetDeleteOnTermination">ResetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resetDynamicVolumeSize">ResetDynamicVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resetEncrypted">ResetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resetSnapshotId">ResetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resetThroughput">ResetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resetVolumeSize">ResetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resetVolumeType">ResetVolumeType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDynamicVolumeSize` <a name="PutDynamicVolumeSize" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.putDynamicVolumeSize"></a>

```csharp
private void PutDynamicVolumeSize(OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.putDynamicVolumeSize.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize">OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize</a>

---

##### `ResetDeleteOnTermination` <a name="ResetDeleteOnTermination" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resetDeleteOnTermination"></a>

```csharp
private void ResetDeleteOnTermination()
```

##### `ResetDynamicVolumeSize` <a name="ResetDynamicVolumeSize" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resetDynamicVolumeSize"></a>

```csharp
private void ResetDynamicVolumeSize()
```

##### `ResetEncrypted` <a name="ResetEncrypted" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resetEncrypted"></a>

```csharp
private void ResetEncrypted()
```

##### `ResetIops` <a name="ResetIops" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resetIops"></a>

```csharp
private void ResetIops()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetSnapshotId` <a name="ResetSnapshotId" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resetSnapshotId"></a>

```csharp
private void ResetSnapshotId()
```

##### `ResetThroughput` <a name="ResetThroughput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resetThroughput"></a>

```csharp
private void ResetThroughput()
```

##### `ResetVolumeSize` <a name="ResetVolumeSize" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resetVolumeSize"></a>

```csharp
private void ResetVolumeSize()
```

##### `ResetVolumeType` <a name="ResetVolumeType" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.resetVolumeType"></a>

```csharp
private void ResetVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.dynamicVolumeSize">DynamicVolumeSize</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference">OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.deleteOnTerminationInput">DeleteOnTerminationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.dynamicVolumeSizeInput">DynamicVolumeSizeInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize">OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.encryptedInput">EncryptedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.iopsInput">IopsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.snapshotIdInput">SnapshotIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.throughputInput">ThroughputInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput">VolumeSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput">VolumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.encrypted">Encrypted</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.iops">Iops</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.snapshotId">SnapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.throughput">Throughput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.volumeSize">VolumeSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.volumeType">VolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs">OceanEcsBlockDeviceMappingsEbs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DynamicVolumeSize`<sup>Required</sup> <a name="DynamicVolumeSize" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.dynamicVolumeSize"></a>

```csharp
public OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference DynamicVolumeSize { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference">OceanEcsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference</a>

---

##### `DeleteOnTerminationInput`<sup>Optional</sup> <a name="DeleteOnTerminationInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.deleteOnTerminationInput"></a>

```csharp
public object DeleteOnTerminationInput { get; }
```

- *Type:* object

---

##### `DynamicVolumeSizeInput`<sup>Optional</sup> <a name="DynamicVolumeSizeInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.dynamicVolumeSizeInput"></a>

```csharp
public OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize DynamicVolumeSizeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize">OceanEcsBlockDeviceMappingsEbsDynamicVolumeSize</a>

---

##### `EncryptedInput`<sup>Optional</sup> <a name="EncryptedInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.encryptedInput"></a>

```csharp
public object EncryptedInput { get; }
```

- *Type:* object

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.iopsInput"></a>

```csharp
public double IopsInput { get; }
```

- *Type:* double

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `SnapshotIdInput`<sup>Optional</sup> <a name="SnapshotIdInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.snapshotIdInput"></a>

```csharp
public string SnapshotIdInput { get; }
```

- *Type:* string

---

##### `ThroughputInput`<sup>Optional</sup> <a name="ThroughputInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.throughputInput"></a>

```csharp
public double ThroughputInput { get; }
```

- *Type:* double

---

##### `VolumeSizeInput`<sup>Optional</sup> <a name="VolumeSizeInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput"></a>

```csharp
public double VolumeSizeInput { get; }
```

- *Type:* double

---

##### `VolumeTypeInput`<sup>Optional</sup> <a name="VolumeTypeInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput"></a>

```csharp
public string VolumeTypeInput { get; }
```

- *Type:* string

---

##### `DeleteOnTermination`<sup>Required</sup> <a name="DeleteOnTermination" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination"></a>

```csharp
public object DeleteOnTermination { get; }
```

- *Type:* object

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.encrypted"></a>

```csharp
public object Encrypted { get; }
```

- *Type:* object

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.iops"></a>

```csharp
public double Iops { get; }
```

- *Type:* double

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `SnapshotId`<sup>Required</sup> <a name="SnapshotId" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.snapshotId"></a>

```csharp
public string SnapshotId { get; }
```

- *Type:* string

---

##### `Throughput`<sup>Required</sup> <a name="Throughput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.throughput"></a>

```csharp
public double Throughput { get; }
```

- *Type:* double

---

##### `VolumeSize`<sup>Required</sup> <a name="VolumeSize" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.volumeSize"></a>

```csharp
public double VolumeSize { get; }
```

- *Type:* double

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.volumeType"></a>

```csharp
public string VolumeType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference.property.internalValue"></a>

```csharp
public OceanEcsBlockDeviceMappingsEbs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs">OceanEcsBlockDeviceMappingsEbs</a>

---


### OceanEcsBlockDeviceMappingsList <a name="OceanEcsBlockDeviceMappingsList" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanEcsBlockDeviceMappingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.get"></a>

```csharp
private OceanEcsBlockDeviceMappingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanEcsBlockDeviceMappingsOutputReference <a name="OceanEcsBlockDeviceMappingsOutputReference" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanEcsBlockDeviceMappingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.putEbs">PutEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.resetEbs">ResetEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.resetNoDevice">ResetNoDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.resetVirtualName">ResetVirtualName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEbs` <a name="PutEbs" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.putEbs"></a>

```csharp
private void PutEbs(OceanEcsBlockDeviceMappingsEbs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.putEbs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs">OceanEcsBlockDeviceMappingsEbs</a>

---

##### `ResetEbs` <a name="ResetEbs" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.resetEbs"></a>

```csharp
private void ResetEbs()
```

##### `ResetNoDevice` <a name="ResetNoDevice" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.resetNoDevice"></a>

```csharp
private void ResetNoDevice()
```

##### `ResetVirtualName` <a name="ResetVirtualName" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.resetVirtualName"></a>

```csharp
private void ResetVirtualName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.ebs">Ebs</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference">OceanEcsBlockDeviceMappingsEbsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.deviceNameInput">DeviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.ebsInput">EbsInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs">OceanEcsBlockDeviceMappingsEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.noDeviceInput">NoDeviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.virtualNameInput">VirtualNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.deviceName">DeviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.noDevice">NoDevice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.virtualName">VirtualName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ebs`<sup>Required</sup> <a name="Ebs" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.ebs"></a>

```csharp
public OceanEcsBlockDeviceMappingsEbsOutputReference Ebs { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbsOutputReference">OceanEcsBlockDeviceMappingsEbsOutputReference</a>

---

##### `DeviceNameInput`<sup>Optional</sup> <a name="DeviceNameInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.deviceNameInput"></a>

```csharp
public string DeviceNameInput { get; }
```

- *Type:* string

---

##### `EbsInput`<sup>Optional</sup> <a name="EbsInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.ebsInput"></a>

```csharp
public OceanEcsBlockDeviceMappingsEbs EbsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsEbs">OceanEcsBlockDeviceMappingsEbs</a>

---

##### `NoDeviceInput`<sup>Optional</sup> <a name="NoDeviceInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.noDeviceInput"></a>

```csharp
public string NoDeviceInput { get; }
```

- *Type:* string

---

##### `VirtualNameInput`<sup>Optional</sup> <a name="VirtualNameInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.virtualNameInput"></a>

```csharp
public string VirtualNameInput { get; }
```

- *Type:* string

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.deviceName"></a>

```csharp
public string DeviceName { get; }
```

- *Type:* string

---

##### `NoDevice`<sup>Required</sup> <a name="NoDevice" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.noDevice"></a>

```csharp
public string NoDevice { get; }
```

- *Type:* string

---

##### `VirtualName`<sup>Required</sup> <a name="VirtualName" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.virtualName"></a>

```csharp
public string VirtualName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsBlockDeviceMappingsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanEcsClusterOrientationList <a name="OceanEcsClusterOrientationList" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanEcsClusterOrientationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.get"></a>

```csharp
private OceanEcsClusterOrientationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanEcsClusterOrientationOutputReference <a name="OceanEcsClusterOrientationOutputReference" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanEcsClusterOrientationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.resetAvailabilityVsCost">ResetAvailabilityVsCost</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailabilityVsCost` <a name="ResetAvailabilityVsCost" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.resetAvailabilityVsCost"></a>

```csharp
private void ResetAvailabilityVsCost()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.property.availabilityVsCostInput">AvailabilityVsCostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.property.availabilityVsCost">AvailabilityVsCost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityVsCostInput`<sup>Optional</sup> <a name="AvailabilityVsCostInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.property.availabilityVsCostInput"></a>

```csharp
public string AvailabilityVsCostInput { get; }
```

- *Type:* string

---

##### `AvailabilityVsCost`<sup>Required</sup> <a name="AvailabilityVsCost" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.property.availabilityVsCost"></a>

```csharp
public string AvailabilityVsCost { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsClusterOrientationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanEcsFiltersOutputReference <a name="OceanEcsFiltersOutputReference" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanEcsFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetArchitectures">ResetArchitectures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetCategories">ResetCategories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetDiskTypes">ResetDiskTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetExcludeFamilies">ResetExcludeFamilies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetExcludeMetal">ResetExcludeMetal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetHypervisor">ResetHypervisor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetIncludeFamilies">ResetIncludeFamilies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetIsEnaSupported">ResetIsEnaSupported</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetMaxGpu">ResetMaxGpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetMaxMemoryGib">ResetMaxMemoryGib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetMaxNetworkPerformance">ResetMaxNetworkPerformance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetMaxVcpu">ResetMaxVcpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetMinEnis">ResetMinEnis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetMinGpu">ResetMinGpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetMinMemoryGib">ResetMinMemoryGib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetMinNetworkPerformance">ResetMinNetworkPerformance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetMinVcpu">ResetMinVcpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetRootDeviceTypes">ResetRootDeviceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetVirtualizationTypes">ResetVirtualizationTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArchitectures` <a name="ResetArchitectures" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetArchitectures"></a>

```csharp
private void ResetArchitectures()
```

##### `ResetCategories` <a name="ResetCategories" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetCategories"></a>

```csharp
private void ResetCategories()
```

##### `ResetDiskTypes` <a name="ResetDiskTypes" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetDiskTypes"></a>

```csharp
private void ResetDiskTypes()
```

##### `ResetExcludeFamilies` <a name="ResetExcludeFamilies" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetExcludeFamilies"></a>

```csharp
private void ResetExcludeFamilies()
```

##### `ResetExcludeMetal` <a name="ResetExcludeMetal" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetExcludeMetal"></a>

```csharp
private void ResetExcludeMetal()
```

##### `ResetHypervisor` <a name="ResetHypervisor" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetHypervisor"></a>

```csharp
private void ResetHypervisor()
```

##### `ResetIncludeFamilies` <a name="ResetIncludeFamilies" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetIncludeFamilies"></a>

```csharp
private void ResetIncludeFamilies()
```

##### `ResetIsEnaSupported` <a name="ResetIsEnaSupported" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetIsEnaSupported"></a>

```csharp
private void ResetIsEnaSupported()
```

##### `ResetMaxGpu` <a name="ResetMaxGpu" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetMaxGpu"></a>

```csharp
private void ResetMaxGpu()
```

##### `ResetMaxMemoryGib` <a name="ResetMaxMemoryGib" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetMaxMemoryGib"></a>

```csharp
private void ResetMaxMemoryGib()
```

##### `ResetMaxNetworkPerformance` <a name="ResetMaxNetworkPerformance" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetMaxNetworkPerformance"></a>

```csharp
private void ResetMaxNetworkPerformance()
```

##### `ResetMaxVcpu` <a name="ResetMaxVcpu" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetMaxVcpu"></a>

```csharp
private void ResetMaxVcpu()
```

##### `ResetMinEnis` <a name="ResetMinEnis" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetMinEnis"></a>

```csharp
private void ResetMinEnis()
```

##### `ResetMinGpu` <a name="ResetMinGpu" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetMinGpu"></a>

```csharp
private void ResetMinGpu()
```

##### `ResetMinMemoryGib` <a name="ResetMinMemoryGib" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetMinMemoryGib"></a>

```csharp
private void ResetMinMemoryGib()
```

##### `ResetMinNetworkPerformance` <a name="ResetMinNetworkPerformance" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetMinNetworkPerformance"></a>

```csharp
private void ResetMinNetworkPerformance()
```

##### `ResetMinVcpu` <a name="ResetMinVcpu" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetMinVcpu"></a>

```csharp
private void ResetMinVcpu()
```

##### `ResetRootDeviceTypes` <a name="ResetRootDeviceTypes" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetRootDeviceTypes"></a>

```csharp
private void ResetRootDeviceTypes()
```

##### `ResetVirtualizationTypes` <a name="ResetVirtualizationTypes" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.resetVirtualizationTypes"></a>

```csharp
private void ResetVirtualizationTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.architecturesInput">ArchitecturesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.categoriesInput">CategoriesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.diskTypesInput">DiskTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.excludeFamiliesInput">ExcludeFamiliesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.excludeMetalInput">ExcludeMetalInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.hypervisorInput">HypervisorInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.includeFamiliesInput">IncludeFamiliesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.isEnaSupportedInput">IsEnaSupportedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.maxGpuInput">MaxGpuInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.maxMemoryGibInput">MaxMemoryGibInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.maxNetworkPerformanceInput">MaxNetworkPerformanceInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.maxVcpuInput">MaxVcpuInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.minEnisInput">MinEnisInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.minGpuInput">MinGpuInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.minMemoryGibInput">MinMemoryGibInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.minNetworkPerformanceInput">MinNetworkPerformanceInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.minVcpuInput">MinVcpuInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.rootDeviceTypesInput">RootDeviceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.virtualizationTypesInput">VirtualizationTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.architectures">Architectures</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.categories">Categories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.diskTypes">DiskTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.excludeFamilies">ExcludeFamilies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.excludeMetal">ExcludeMetal</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.hypervisor">Hypervisor</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.includeFamilies">IncludeFamilies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.isEnaSupported">IsEnaSupported</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.maxGpu">MaxGpu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.maxMemoryGib">MaxMemoryGib</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.maxNetworkPerformance">MaxNetworkPerformance</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.maxVcpu">MaxVcpu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.minEnis">MinEnis</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.minGpu">MinGpu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.minMemoryGib">MinMemoryGib</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.minNetworkPerformance">MinNetworkPerformance</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.minVcpu">MinVcpu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.rootDeviceTypes">RootDeviceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.virtualizationTypes">VirtualizationTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters">OceanEcsFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArchitecturesInput`<sup>Optional</sup> <a name="ArchitecturesInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.architecturesInput"></a>

```csharp
public string[] ArchitecturesInput { get; }
```

- *Type:* string[]

---

##### `CategoriesInput`<sup>Optional</sup> <a name="CategoriesInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.categoriesInput"></a>

```csharp
public string[] CategoriesInput { get; }
```

- *Type:* string[]

---

##### `DiskTypesInput`<sup>Optional</sup> <a name="DiskTypesInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.diskTypesInput"></a>

```csharp
public string[] DiskTypesInput { get; }
```

- *Type:* string[]

---

##### `ExcludeFamiliesInput`<sup>Optional</sup> <a name="ExcludeFamiliesInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.excludeFamiliesInput"></a>

```csharp
public string[] ExcludeFamiliesInput { get; }
```

- *Type:* string[]

---

##### `ExcludeMetalInput`<sup>Optional</sup> <a name="ExcludeMetalInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.excludeMetalInput"></a>

```csharp
public object ExcludeMetalInput { get; }
```

- *Type:* object

---

##### `HypervisorInput`<sup>Optional</sup> <a name="HypervisorInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.hypervisorInput"></a>

```csharp
public string[] HypervisorInput { get; }
```

- *Type:* string[]

---

##### `IncludeFamiliesInput`<sup>Optional</sup> <a name="IncludeFamiliesInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.includeFamiliesInput"></a>

```csharp
public string[] IncludeFamiliesInput { get; }
```

- *Type:* string[]

---

##### `IsEnaSupportedInput`<sup>Optional</sup> <a name="IsEnaSupportedInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.isEnaSupportedInput"></a>

```csharp
public string IsEnaSupportedInput { get; }
```

- *Type:* string

---

##### `MaxGpuInput`<sup>Optional</sup> <a name="MaxGpuInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.maxGpuInput"></a>

```csharp
public double MaxGpuInput { get; }
```

- *Type:* double

---

##### `MaxMemoryGibInput`<sup>Optional</sup> <a name="MaxMemoryGibInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.maxMemoryGibInput"></a>

```csharp
public double MaxMemoryGibInput { get; }
```

- *Type:* double

---

##### `MaxNetworkPerformanceInput`<sup>Optional</sup> <a name="MaxNetworkPerformanceInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.maxNetworkPerformanceInput"></a>

```csharp
public double MaxNetworkPerformanceInput { get; }
```

- *Type:* double

---

##### `MaxVcpuInput`<sup>Optional</sup> <a name="MaxVcpuInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.maxVcpuInput"></a>

```csharp
public double MaxVcpuInput { get; }
```

- *Type:* double

---

##### `MinEnisInput`<sup>Optional</sup> <a name="MinEnisInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.minEnisInput"></a>

```csharp
public double MinEnisInput { get; }
```

- *Type:* double

---

##### `MinGpuInput`<sup>Optional</sup> <a name="MinGpuInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.minGpuInput"></a>

```csharp
public double MinGpuInput { get; }
```

- *Type:* double

---

##### `MinMemoryGibInput`<sup>Optional</sup> <a name="MinMemoryGibInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.minMemoryGibInput"></a>

```csharp
public double MinMemoryGibInput { get; }
```

- *Type:* double

---

##### `MinNetworkPerformanceInput`<sup>Optional</sup> <a name="MinNetworkPerformanceInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.minNetworkPerformanceInput"></a>

```csharp
public double MinNetworkPerformanceInput { get; }
```

- *Type:* double

---

##### `MinVcpuInput`<sup>Optional</sup> <a name="MinVcpuInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.minVcpuInput"></a>

```csharp
public double MinVcpuInput { get; }
```

- *Type:* double

---

##### `RootDeviceTypesInput`<sup>Optional</sup> <a name="RootDeviceTypesInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.rootDeviceTypesInput"></a>

```csharp
public string[] RootDeviceTypesInput { get; }
```

- *Type:* string[]

---

##### `VirtualizationTypesInput`<sup>Optional</sup> <a name="VirtualizationTypesInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.virtualizationTypesInput"></a>

```csharp
public string[] VirtualizationTypesInput { get; }
```

- *Type:* string[]

---

##### `Architectures`<sup>Required</sup> <a name="Architectures" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.architectures"></a>

```csharp
public string[] Architectures { get; }
```

- *Type:* string[]

---

##### `Categories`<sup>Required</sup> <a name="Categories" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.categories"></a>

```csharp
public string[] Categories { get; }
```

- *Type:* string[]

---

##### `DiskTypes`<sup>Required</sup> <a name="DiskTypes" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.diskTypes"></a>

```csharp
public string[] DiskTypes { get; }
```

- *Type:* string[]

---

##### `ExcludeFamilies`<sup>Required</sup> <a name="ExcludeFamilies" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.excludeFamilies"></a>

```csharp
public string[] ExcludeFamilies { get; }
```

- *Type:* string[]

---

##### `ExcludeMetal`<sup>Required</sup> <a name="ExcludeMetal" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.excludeMetal"></a>

```csharp
public object ExcludeMetal { get; }
```

- *Type:* object

---

##### `Hypervisor`<sup>Required</sup> <a name="Hypervisor" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.hypervisor"></a>

```csharp
public string[] Hypervisor { get; }
```

- *Type:* string[]

---

##### `IncludeFamilies`<sup>Required</sup> <a name="IncludeFamilies" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.includeFamilies"></a>

```csharp
public string[] IncludeFamilies { get; }
```

- *Type:* string[]

---

##### `IsEnaSupported`<sup>Required</sup> <a name="IsEnaSupported" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.isEnaSupported"></a>

```csharp
public string IsEnaSupported { get; }
```

- *Type:* string

---

##### `MaxGpu`<sup>Required</sup> <a name="MaxGpu" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.maxGpu"></a>

```csharp
public double MaxGpu { get; }
```

- *Type:* double

---

##### `MaxMemoryGib`<sup>Required</sup> <a name="MaxMemoryGib" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.maxMemoryGib"></a>

```csharp
public double MaxMemoryGib { get; }
```

- *Type:* double

---

##### `MaxNetworkPerformance`<sup>Required</sup> <a name="MaxNetworkPerformance" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.maxNetworkPerformance"></a>

```csharp
public double MaxNetworkPerformance { get; }
```

- *Type:* double

---

##### `MaxVcpu`<sup>Required</sup> <a name="MaxVcpu" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.maxVcpu"></a>

```csharp
public double MaxVcpu { get; }
```

- *Type:* double

---

##### `MinEnis`<sup>Required</sup> <a name="MinEnis" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.minEnis"></a>

```csharp
public double MinEnis { get; }
```

- *Type:* double

---

##### `MinGpu`<sup>Required</sup> <a name="MinGpu" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.minGpu"></a>

```csharp
public double MinGpu { get; }
```

- *Type:* double

---

##### `MinMemoryGib`<sup>Required</sup> <a name="MinMemoryGib" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.minMemoryGib"></a>

```csharp
public double MinMemoryGib { get; }
```

- *Type:* double

---

##### `MinNetworkPerformance`<sup>Required</sup> <a name="MinNetworkPerformance" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.minNetworkPerformance"></a>

```csharp
public double MinNetworkPerformance { get; }
```

- *Type:* double

---

##### `MinVcpu`<sup>Required</sup> <a name="MinVcpu" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.minVcpu"></a>

```csharp
public double MinVcpu { get; }
```

- *Type:* double

---

##### `RootDeviceTypes`<sup>Required</sup> <a name="RootDeviceTypes" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.rootDeviceTypes"></a>

```csharp
public string[] RootDeviceTypes { get; }
```

- *Type:* string[]

---

##### `VirtualizationTypes`<sup>Required</sup> <a name="VirtualizationTypes" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.virtualizationTypes"></a>

```csharp
public string[] VirtualizationTypes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsFiltersOutputReference.property.internalValue"></a>

```csharp
public OceanEcsFilters InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsFilters">OceanEcsFilters</a>

---


### OceanEcsInstanceMetadataOptionsOutputReference <a name="OceanEcsInstanceMetadataOptionsOutputReference" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanEcsInstanceMetadataOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.resetHttpPutResponseHopLimit">ResetHttpPutResponseHopLimit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHttpPutResponseHopLimit` <a name="ResetHttpPutResponseHopLimit" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.resetHttpPutResponseHopLimit"></a>

```csharp
private void ResetHttpPutResponseHopLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput">HttpPutResponseHopLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.property.httpTokensInput">HttpTokensInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit">HttpPutResponseHopLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.property.httpTokens">HttpTokens</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptions">OceanEcsInstanceMetadataOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HttpPutResponseHopLimitInput`<sup>Optional</sup> <a name="HttpPutResponseHopLimitInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput"></a>

```csharp
public double HttpPutResponseHopLimitInput { get; }
```

- *Type:* double

---

##### `HttpTokensInput`<sup>Optional</sup> <a name="HttpTokensInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.property.httpTokensInput"></a>

```csharp
public string HttpTokensInput { get; }
```

- *Type:* string

---

##### `HttpPutResponseHopLimit`<sup>Required</sup> <a name="HttpPutResponseHopLimit" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit"></a>

```csharp
public double HttpPutResponseHopLimit { get; }
```

- *Type:* double

---

##### `HttpTokens`<sup>Required</sup> <a name="HttpTokens" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.property.httpTokens"></a>

```csharp
public string HttpTokens { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptionsOutputReference.property.internalValue"></a>

```csharp
public OceanEcsInstanceMetadataOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsInstanceMetadataOptions">OceanEcsInstanceMetadataOptions</a>

---


### OceanEcsLoggingExportOutputReference <a name="OceanEcsLoggingExportOutputReference" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanEcsLoggingExportOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.putS3">PutS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.resetS3">ResetS3</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3` <a name="PutS3" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.putS3"></a>

```csharp
private void PutS3(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.putS3.parameter.value"></a>

- *Type:* object

---

##### `ResetS3` <a name="ResetS3" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.resetS3"></a>

```csharp
private void ResetS3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List">OceanEcsLoggingExportS3List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.property.s3Input">S3Input</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExport">OceanEcsLoggingExport</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.property.s3"></a>

```csharp
public OceanEcsLoggingExportS3List S3 { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List">OceanEcsLoggingExportS3List</a>

---

##### `S3Input`<sup>Optional</sup> <a name="S3Input" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.property.s3Input"></a>

```csharp
public object S3Input { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference.property.internalValue"></a>

```csharp
public OceanEcsLoggingExport InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExport">OceanEcsLoggingExport</a>

---


### OceanEcsLoggingExportS3List <a name="OceanEcsLoggingExportS3List" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanEcsLoggingExportS3List(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.get"></a>

```csharp
private OceanEcsLoggingExportS3OutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3List.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanEcsLoggingExportS3OutputReference <a name="OceanEcsLoggingExportS3OutputReference" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanEcsLoggingExportS3OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportS3OutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanEcsLoggingOutputReference <a name="OceanEcsLoggingOutputReference" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanEcsLoggingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.putExport">PutExport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.resetExport">ResetExport</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExport` <a name="PutExport" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.putExport"></a>

```csharp
private void PutExport(OceanEcsLoggingExport Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.putExport.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExport">OceanEcsLoggingExport</a>

---

##### `ResetExport` <a name="ResetExport" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.resetExport"></a>

```csharp
private void ResetExport()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.property.export">Export</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference">OceanEcsLoggingExportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.property.exportInput">ExportInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExport">OceanEcsLoggingExport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLogging">OceanEcsLogging</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Export`<sup>Required</sup> <a name="Export" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.property.export"></a>

```csharp
public OceanEcsLoggingExportOutputReference Export { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExportOutputReference">OceanEcsLoggingExportOutputReference</a>

---

##### `ExportInput`<sup>Optional</sup> <a name="ExportInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.property.exportInput"></a>

```csharp
public OceanEcsLoggingExport ExportInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingExport">OceanEcsLoggingExport</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsLoggingOutputReference.property.internalValue"></a>

```csharp
public OceanEcsLogging InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsLogging">OceanEcsLogging</a>

---


### OceanEcsOptimizeImagesOutputReference <a name="OceanEcsOptimizeImagesOutputReference" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanEcsOptimizeImagesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.resetTimeWindows">ResetTimeWindows</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTimeWindows` <a name="ResetTimeWindows" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.resetTimeWindows"></a>

```csharp
private void ResetTimeWindows()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.property.performAtInput">PerformAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.property.shouldOptimizeEcsAmiInput">ShouldOptimizeEcsAmiInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.property.timeWindowsInput">TimeWindowsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.property.performAt">PerformAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.property.shouldOptimizeEcsAmi">ShouldOptimizeEcsAmi</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.property.timeWindows">TimeWindows</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImages">OceanEcsOptimizeImages</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PerformAtInput`<sup>Optional</sup> <a name="PerformAtInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.property.performAtInput"></a>

```csharp
public string PerformAtInput { get; }
```

- *Type:* string

---

##### `ShouldOptimizeEcsAmiInput`<sup>Optional</sup> <a name="ShouldOptimizeEcsAmiInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.property.shouldOptimizeEcsAmiInput"></a>

```csharp
public object ShouldOptimizeEcsAmiInput { get; }
```

- *Type:* object

---

##### `TimeWindowsInput`<sup>Optional</sup> <a name="TimeWindowsInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.property.timeWindowsInput"></a>

```csharp
public string[] TimeWindowsInput { get; }
```

- *Type:* string[]

---

##### `PerformAt`<sup>Required</sup> <a name="PerformAt" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.property.performAt"></a>

```csharp
public string PerformAt { get; }
```

- *Type:* string

---

##### `ShouldOptimizeEcsAmi`<sup>Required</sup> <a name="ShouldOptimizeEcsAmi" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.property.shouldOptimizeEcsAmi"></a>

```csharp
public object ShouldOptimizeEcsAmi { get; }
```

- *Type:* object

---

##### `TimeWindows`<sup>Required</sup> <a name="TimeWindows" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.property.timeWindows"></a>

```csharp
public string[] TimeWindows { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImagesOutputReference.property.internalValue"></a>

```csharp
public OceanEcsOptimizeImages InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsOptimizeImages">OceanEcsOptimizeImages</a>

---


### OceanEcsScheduledTaskList <a name="OceanEcsScheduledTaskList" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanEcsScheduledTaskList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.get"></a>

```csharp
private OceanEcsScheduledTaskOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanEcsScheduledTaskOutputReference <a name="OceanEcsScheduledTaskOutputReference" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanEcsScheduledTaskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.putShutdownHours">PutShutdownHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.putTasks">PutTasks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.resetShutdownHours">ResetShutdownHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.resetTasks">ResetTasks</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutShutdownHours` <a name="PutShutdownHours" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.putShutdownHours"></a>

```csharp
private void PutShutdownHours(OceanEcsScheduledTaskShutdownHours Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.putShutdownHours.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHours">OceanEcsScheduledTaskShutdownHours</a>

---

##### `PutTasks` <a name="PutTasks" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.putTasks"></a>

```csharp
private void PutTasks(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.putTasks.parameter.value"></a>

- *Type:* object

---

##### `ResetShutdownHours` <a name="ResetShutdownHours" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.resetShutdownHours"></a>

```csharp
private void ResetShutdownHours()
```

##### `ResetTasks` <a name="ResetTasks" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.resetTasks"></a>

```csharp
private void ResetTasks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.property.shutdownHours">ShutdownHours</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference">OceanEcsScheduledTaskShutdownHoursOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.property.tasks">Tasks</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList">OceanEcsScheduledTaskTasksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.property.shutdownHoursInput">ShutdownHoursInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHours">OceanEcsScheduledTaskShutdownHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.property.tasksInput">TasksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ShutdownHours`<sup>Required</sup> <a name="ShutdownHours" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.property.shutdownHours"></a>

```csharp
public OceanEcsScheduledTaskShutdownHoursOutputReference ShutdownHours { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference">OceanEcsScheduledTaskShutdownHoursOutputReference</a>

---

##### `Tasks`<sup>Required</sup> <a name="Tasks" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.property.tasks"></a>

```csharp
public OceanEcsScheduledTaskTasksList Tasks { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList">OceanEcsScheduledTaskTasksList</a>

---

##### `ShutdownHoursInput`<sup>Optional</sup> <a name="ShutdownHoursInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.property.shutdownHoursInput"></a>

```csharp
public OceanEcsScheduledTaskShutdownHours ShutdownHoursInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHours">OceanEcsScheduledTaskShutdownHours</a>

---

##### `TasksInput`<sup>Optional</sup> <a name="TasksInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.property.tasksInput"></a>

```csharp
public object TasksInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanEcsScheduledTaskShutdownHoursOutputReference <a name="OceanEcsScheduledTaskShutdownHoursOutputReference" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanEcsScheduledTaskShutdownHoursOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.resetIsEnabled"></a>

```csharp
private void ResetIsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.property.timeWindowsInput">TimeWindowsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.property.isEnabled">IsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.property.timeWindows">TimeWindows</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHours">OceanEcsScheduledTaskShutdownHours</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.property.isEnabledInput"></a>

```csharp
public object IsEnabledInput { get; }
```

- *Type:* object

---

##### `TimeWindowsInput`<sup>Optional</sup> <a name="TimeWindowsInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.property.timeWindowsInput"></a>

```csharp
public string[] TimeWindowsInput { get; }
```

- *Type:* string[]

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.property.isEnabled"></a>

```csharp
public object IsEnabled { get; }
```

- *Type:* object

---

##### `TimeWindows`<sup>Required</sup> <a name="TimeWindows" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.property.timeWindows"></a>

```csharp
public string[] TimeWindows { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHoursOutputReference.property.internalValue"></a>

```csharp
public OceanEcsScheduledTaskShutdownHours InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskShutdownHours">OceanEcsScheduledTaskShutdownHours</a>

---


### OceanEcsScheduledTaskTasksList <a name="OceanEcsScheduledTaskTasksList" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanEcsScheduledTaskTasksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.get"></a>

```csharp
private OceanEcsScheduledTaskTasksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanEcsScheduledTaskTasksOutputReference <a name="OceanEcsScheduledTaskTasksOutputReference" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanEcsScheduledTaskTasksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.property.cronExpressionInput">CronExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.property.taskTypeInput">TaskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.property.cronExpression">CronExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.property.isEnabled">IsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.property.taskType">TaskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CronExpressionInput`<sup>Optional</sup> <a name="CronExpressionInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.property.cronExpressionInput"></a>

```csharp
public string CronExpressionInput { get; }
```

- *Type:* string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.property.isEnabledInput"></a>

```csharp
public object IsEnabledInput { get; }
```

- *Type:* object

---

##### `TaskTypeInput`<sup>Optional</sup> <a name="TaskTypeInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.property.taskTypeInput"></a>

```csharp
public string TaskTypeInput { get; }
```

- *Type:* string

---

##### `CronExpression`<sup>Required</sup> <a name="CronExpression" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.property.cronExpression"></a>

```csharp
public string CronExpression { get; }
```

- *Type:* string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.property.isEnabled"></a>

```csharp
public object IsEnabled { get; }
```

- *Type:* object

---

##### `TaskType`<sup>Required</sup> <a name="TaskType" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.property.taskType"></a>

```csharp
public string TaskType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsScheduledTaskTasksOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanEcsTagsList <a name="OceanEcsTagsList" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanEcsTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.get"></a>

```csharp
private OceanEcsTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanEcsTagsOutputReference <a name="OceanEcsTagsOutputReference" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanEcsTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsTagsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanEcsUpdatePolicyOutputReference <a name="OceanEcsUpdatePolicyOutputReference" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanEcsUpdatePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.putRollConfig">PutRollConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.resetAutoApplyTags">ResetAutoApplyTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.resetConditionedRoll">ResetConditionedRoll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.resetRollConfig">ResetRollConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRollConfig` <a name="PutRollConfig" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.putRollConfig"></a>

```csharp
private void PutRollConfig(OceanEcsUpdatePolicyRollConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.putRollConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfig">OceanEcsUpdatePolicyRollConfig</a>

---

##### `ResetAutoApplyTags` <a name="ResetAutoApplyTags" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.resetAutoApplyTags"></a>

```csharp
private void ResetAutoApplyTags()
```

##### `ResetConditionedRoll` <a name="ResetConditionedRoll" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.resetConditionedRoll"></a>

```csharp
private void ResetConditionedRoll()
```

##### `ResetRollConfig` <a name="ResetRollConfig" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.resetRollConfig"></a>

```csharp
private void ResetRollConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.rollConfig">RollConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference">OceanEcsUpdatePolicyRollConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.autoApplyTagsInput">AutoApplyTagsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.conditionedRollInput">ConditionedRollInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.rollConfigInput">RollConfigInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfig">OceanEcsUpdatePolicyRollConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.shouldRollInput">ShouldRollInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.autoApplyTags">AutoApplyTags</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.conditionedRoll">ConditionedRoll</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.shouldRoll">ShouldRoll</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicy">OceanEcsUpdatePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RollConfig`<sup>Required</sup> <a name="RollConfig" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.rollConfig"></a>

```csharp
public OceanEcsUpdatePolicyRollConfigOutputReference RollConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference">OceanEcsUpdatePolicyRollConfigOutputReference</a>

---

##### `AutoApplyTagsInput`<sup>Optional</sup> <a name="AutoApplyTagsInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.autoApplyTagsInput"></a>

```csharp
public object AutoApplyTagsInput { get; }
```

- *Type:* object

---

##### `ConditionedRollInput`<sup>Optional</sup> <a name="ConditionedRollInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.conditionedRollInput"></a>

```csharp
public object ConditionedRollInput { get; }
```

- *Type:* object

---

##### `RollConfigInput`<sup>Optional</sup> <a name="RollConfigInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.rollConfigInput"></a>

```csharp
public OceanEcsUpdatePolicyRollConfig RollConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfig">OceanEcsUpdatePolicyRollConfig</a>

---

##### `ShouldRollInput`<sup>Optional</sup> <a name="ShouldRollInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.shouldRollInput"></a>

```csharp
public object ShouldRollInput { get; }
```

- *Type:* object

---

##### `AutoApplyTags`<sup>Required</sup> <a name="AutoApplyTags" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.autoApplyTags"></a>

```csharp
public object AutoApplyTags { get; }
```

- *Type:* object

---

##### `ConditionedRoll`<sup>Required</sup> <a name="ConditionedRoll" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.conditionedRoll"></a>

```csharp
public object ConditionedRoll { get; }
```

- *Type:* object

---

##### `ShouldRoll`<sup>Required</sup> <a name="ShouldRoll" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.shouldRoll"></a>

```csharp
public object ShouldRoll { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyOutputReference.property.internalValue"></a>

```csharp
public OceanEcsUpdatePolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicy">OceanEcsUpdatePolicy</a>

---


### OceanEcsUpdatePolicyRollConfigOutputReference <a name="OceanEcsUpdatePolicyRollConfigOutputReference" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanEcsUpdatePolicyRollConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.resetBatchMinHealthyPercentage">ResetBatchMinHealthyPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBatchMinHealthyPercentage` <a name="ResetBatchMinHealthyPercentage" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.resetBatchMinHealthyPercentage"></a>

```csharp
private void ResetBatchMinHealthyPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.property.batchMinHealthyPercentageInput">BatchMinHealthyPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.property.batchSizePercentageInput">BatchSizePercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.property.batchMinHealthyPercentage">BatchMinHealthyPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.property.batchSizePercentage">BatchSizePercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfig">OceanEcsUpdatePolicyRollConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BatchMinHealthyPercentageInput`<sup>Optional</sup> <a name="BatchMinHealthyPercentageInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.property.batchMinHealthyPercentageInput"></a>

```csharp
public double BatchMinHealthyPercentageInput { get; }
```

- *Type:* double

---

##### `BatchSizePercentageInput`<sup>Optional</sup> <a name="BatchSizePercentageInput" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.property.batchSizePercentageInput"></a>

```csharp
public double BatchSizePercentageInput { get; }
```

- *Type:* double

---

##### `BatchMinHealthyPercentage`<sup>Required</sup> <a name="BatchMinHealthyPercentage" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.property.batchMinHealthyPercentage"></a>

```csharp
public double BatchMinHealthyPercentage { get; }
```

- *Type:* double

---

##### `BatchSizePercentage`<sup>Required</sup> <a name="BatchSizePercentage" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.property.batchSizePercentage"></a>

```csharp
public double BatchSizePercentage { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfigOutputReference.property.internalValue"></a>

```csharp
public OceanEcsUpdatePolicyRollConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanEcs.OceanEcsUpdatePolicyRollConfig">OceanEcsUpdatePolicyRollConfig</a>

---



