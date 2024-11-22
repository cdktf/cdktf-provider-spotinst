# `oceanAws` Submodule <a name="`oceanAws` Submodule" id="@cdktf/provider-spotinst.oceanAws"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OceanAws <a name="OceanAws" id="@cdktf/provider-spotinst.oceanAws.OceanAws"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws spotinst_ocean_aws}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAws(Construct Scope, string Id, OceanAwsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig">OceanAwsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig">OceanAwsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.putAttachLoadBalancer">PutAttachLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.putAutoscaler">PutAutoscaler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.putBlockDeviceMappings">PutBlockDeviceMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.putClusterOrientation">PutClusterOrientation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.putDetachLoadBalancer">PutDetachLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.putFilters">PutFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.putInstanceMetadataOptions">PutInstanceMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.putLoadBalancers">PutLoadBalancers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.putLogging">PutLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.putResourceTagSpecification">PutResourceTagSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.putScheduledTask">PutScheduledTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.putUpdatePolicy">PutUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetAssociateIpv6Address">ResetAssociateIpv6Address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetAssociatePublicIpAddress">ResetAssociatePublicIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetAttachLoadBalancer">ResetAttachLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetAutoscaler">ResetAutoscaler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetBlacklist">ResetBlacklist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetBlockDeviceMappings">ResetBlockDeviceMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetClusterOrientation">ResetClusterOrientation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetControllerId">ResetControllerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetDesiredCapacity">ResetDesiredCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetDetachLoadBalancer">ResetDetachLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetDrainingTimeout">ResetDrainingTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetEbsOptimized">ResetEbsOptimized</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetFallbackToOndemand">ResetFallbackToOndemand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetFilters">ResetFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetGracePeriod">ResetGracePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetHealthCheckUnhealthyDurationBeforeReplacement">ResetHealthCheckUnhealthyDurationBeforeReplacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetIamInstanceProfile">ResetIamInstanceProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetInstanceMetadataOptions">ResetInstanceMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetKeyName">ResetKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetLoadBalancers">ResetLoadBalancers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetLogging">ResetLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetMaxSize">ResetMaxSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetMinSize">ResetMinSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetMonitoring">ResetMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetReservedEnis">ResetReservedEnis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetResourceTagSpecification">ResetResourceTagSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetRootVolumeSize">ResetRootVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetScheduledTask">ResetScheduledTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetSpotPercentage">ResetSpotPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetSpreadNodesBy">ResetSpreadNodesBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetUpdatePolicy">ResetUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetUseAsTemplateOnly">ResetUseAsTemplateOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetUserData">ResetUserData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetUtilizeCommitments">ResetUtilizeCommitments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetUtilizeReservedInstances">ResetUtilizeReservedInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetWhitelist">ResetWhitelist</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAws.OceanAws.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-spotinst.oceanAws.OceanAws.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-spotinst.oceanAws.OceanAws.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAws.OceanAws.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-spotinst.oceanAws.OceanAws.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-spotinst.oceanAws.OceanAws.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-spotinst.oceanAws.OceanAws.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-spotinst.oceanAws.OceanAws.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-spotinst.oceanAws.OceanAws.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-spotinst.oceanAws.OceanAws.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-spotinst.oceanAws.OceanAws.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-spotinst.oceanAws.OceanAws.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-spotinst.oceanAws.OceanAws.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanAws.OceanAws.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.oceanAws.OceanAws.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-spotinst.oceanAws.OceanAws.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanAws.OceanAws.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-spotinst.oceanAws.OceanAws.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-spotinst.oceanAws.OceanAws.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-spotinst.oceanAws.OceanAws.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-spotinst.oceanAws.OceanAws.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanAws.OceanAws.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAttachLoadBalancer` <a name="PutAttachLoadBalancer" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putAttachLoadBalancer"></a>

```csharp
private void PutAttachLoadBalancer(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putAttachLoadBalancer.parameter.value"></a>

- *Type:* object

---

##### `PutAutoscaler` <a name="PutAutoscaler" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putAutoscaler"></a>

```csharp
private void PutAutoscaler(OceanAwsAutoscaler Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putAutoscaler.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler">OceanAwsAutoscaler</a>

---

##### `PutBlockDeviceMappings` <a name="PutBlockDeviceMappings" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putBlockDeviceMappings"></a>

```csharp
private void PutBlockDeviceMappings(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putBlockDeviceMappings.parameter.value"></a>

- *Type:* object

---

##### `PutClusterOrientation` <a name="PutClusterOrientation" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putClusterOrientation"></a>

```csharp
private void PutClusterOrientation(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putClusterOrientation.parameter.value"></a>

- *Type:* object

---

##### `PutDetachLoadBalancer` <a name="PutDetachLoadBalancer" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putDetachLoadBalancer"></a>

```csharp
private void PutDetachLoadBalancer(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putDetachLoadBalancer.parameter.value"></a>

- *Type:* object

---

##### `PutFilters` <a name="PutFilters" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putFilters"></a>

```csharp
private void PutFilters(OceanAwsFilters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putFilters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters">OceanAwsFilters</a>

---

##### `PutInstanceMetadataOptions` <a name="PutInstanceMetadataOptions" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putInstanceMetadataOptions"></a>

```csharp
private void PutInstanceMetadataOptions(OceanAwsInstanceMetadataOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putInstanceMetadataOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptions">OceanAwsInstanceMetadataOptions</a>

---

##### `PutLoadBalancers` <a name="PutLoadBalancers" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putLoadBalancers"></a>

```csharp
private void PutLoadBalancers(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putLoadBalancers.parameter.value"></a>

- *Type:* object

---

##### `PutLogging` <a name="PutLogging" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putLogging"></a>

```csharp
private void PutLogging(OceanAwsLogging Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putLogging.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLogging">OceanAwsLogging</a>

---

##### `PutResourceTagSpecification` <a name="PutResourceTagSpecification" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putResourceTagSpecification"></a>

```csharp
private void PutResourceTagSpecification(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putResourceTagSpecification.parameter.value"></a>

- *Type:* object

---

##### `PutScheduledTask` <a name="PutScheduledTask" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putScheduledTask"></a>

```csharp
private void PutScheduledTask(OceanAwsScheduledTask Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putScheduledTask.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTask">OceanAwsScheduledTask</a>

---

##### `PutTags` <a name="PutTags" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putTags"></a>

```csharp
private void PutTags(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putTags.parameter.value"></a>

- *Type:* object

---

##### `PutUpdatePolicy` <a name="PutUpdatePolicy" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putUpdatePolicy"></a>

```csharp
private void PutUpdatePolicy(OceanAwsUpdatePolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putUpdatePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy">OceanAwsUpdatePolicy</a>

---

##### `ResetAssociateIpv6Address` <a name="ResetAssociateIpv6Address" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetAssociateIpv6Address"></a>

```csharp
private void ResetAssociateIpv6Address()
```

##### `ResetAssociatePublicIpAddress` <a name="ResetAssociatePublicIpAddress" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetAssociatePublicIpAddress"></a>

```csharp
private void ResetAssociatePublicIpAddress()
```

##### `ResetAttachLoadBalancer` <a name="ResetAttachLoadBalancer" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetAttachLoadBalancer"></a>

```csharp
private void ResetAttachLoadBalancer()
```

##### `ResetAutoscaler` <a name="ResetAutoscaler" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetAutoscaler"></a>

```csharp
private void ResetAutoscaler()
```

##### `ResetBlacklist` <a name="ResetBlacklist" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetBlacklist"></a>

```csharp
private void ResetBlacklist()
```

##### `ResetBlockDeviceMappings` <a name="ResetBlockDeviceMappings" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetBlockDeviceMappings"></a>

```csharp
private void ResetBlockDeviceMappings()
```

##### `ResetClusterOrientation` <a name="ResetClusterOrientation" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetClusterOrientation"></a>

```csharp
private void ResetClusterOrientation()
```

##### `ResetControllerId` <a name="ResetControllerId" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetControllerId"></a>

```csharp
private void ResetControllerId()
```

##### `ResetDesiredCapacity` <a name="ResetDesiredCapacity" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetDesiredCapacity"></a>

```csharp
private void ResetDesiredCapacity()
```

##### `ResetDetachLoadBalancer` <a name="ResetDetachLoadBalancer" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetDetachLoadBalancer"></a>

```csharp
private void ResetDetachLoadBalancer()
```

##### `ResetDrainingTimeout` <a name="ResetDrainingTimeout" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetDrainingTimeout"></a>

```csharp
private void ResetDrainingTimeout()
```

##### `ResetEbsOptimized` <a name="ResetEbsOptimized" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetEbsOptimized"></a>

```csharp
private void ResetEbsOptimized()
```

##### `ResetFallbackToOndemand` <a name="ResetFallbackToOndemand" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetFallbackToOndemand"></a>

```csharp
private void ResetFallbackToOndemand()
```

##### `ResetFilters` <a name="ResetFilters" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetFilters"></a>

```csharp
private void ResetFilters()
```

##### `ResetGracePeriod` <a name="ResetGracePeriod" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetGracePeriod"></a>

```csharp
private void ResetGracePeriod()
```

##### `ResetHealthCheckUnhealthyDurationBeforeReplacement` <a name="ResetHealthCheckUnhealthyDurationBeforeReplacement" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetHealthCheckUnhealthyDurationBeforeReplacement"></a>

```csharp
private void ResetHealthCheckUnhealthyDurationBeforeReplacement()
```

##### `ResetIamInstanceProfile` <a name="ResetIamInstanceProfile" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetIamInstanceProfile"></a>

```csharp
private void ResetIamInstanceProfile()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInstanceMetadataOptions` <a name="ResetInstanceMetadataOptions" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetInstanceMetadataOptions"></a>

```csharp
private void ResetInstanceMetadataOptions()
```

##### `ResetKeyName` <a name="ResetKeyName" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetKeyName"></a>

```csharp
private void ResetKeyName()
```

##### `ResetLoadBalancers` <a name="ResetLoadBalancers" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetLoadBalancers"></a>

```csharp
private void ResetLoadBalancers()
```

##### `ResetLogging` <a name="ResetLogging" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetLogging"></a>

```csharp
private void ResetLogging()
```

##### `ResetMaxSize` <a name="ResetMaxSize" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetMaxSize"></a>

```csharp
private void ResetMaxSize()
```

##### `ResetMinSize` <a name="ResetMinSize" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetMinSize"></a>

```csharp
private void ResetMinSize()
```

##### `ResetMonitoring` <a name="ResetMonitoring" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetMonitoring"></a>

```csharp
private void ResetMonitoring()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetReservedEnis` <a name="ResetReservedEnis" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetReservedEnis"></a>

```csharp
private void ResetReservedEnis()
```

##### `ResetResourceTagSpecification` <a name="ResetResourceTagSpecification" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetResourceTagSpecification"></a>

```csharp
private void ResetResourceTagSpecification()
```

##### `ResetRootVolumeSize` <a name="ResetRootVolumeSize" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetRootVolumeSize"></a>

```csharp
private void ResetRootVolumeSize()
```

##### `ResetScheduledTask` <a name="ResetScheduledTask" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetScheduledTask"></a>

```csharp
private void ResetScheduledTask()
```

##### `ResetSpotPercentage` <a name="ResetSpotPercentage" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetSpotPercentage"></a>

```csharp
private void ResetSpotPercentage()
```

##### `ResetSpreadNodesBy` <a name="ResetSpreadNodesBy" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetSpreadNodesBy"></a>

```csharp
private void ResetSpreadNodesBy()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetUpdatePolicy` <a name="ResetUpdatePolicy" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetUpdatePolicy"></a>

```csharp
private void ResetUpdatePolicy()
```

##### `ResetUseAsTemplateOnly` <a name="ResetUseAsTemplateOnly" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetUseAsTemplateOnly"></a>

```csharp
private void ResetUseAsTemplateOnly()
```

##### `ResetUserData` <a name="ResetUserData" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetUserData"></a>

```csharp
private void ResetUserData()
```

##### `ResetUtilizeCommitments` <a name="ResetUtilizeCommitments" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetUtilizeCommitments"></a>

```csharp
private void ResetUtilizeCommitments()
```

##### `ResetUtilizeReservedInstances` <a name="ResetUtilizeReservedInstances" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetUtilizeReservedInstances"></a>

```csharp
private void ResetUtilizeReservedInstances()
```

##### `ResetWhitelist` <a name="ResetWhitelist" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetWhitelist"></a>

```csharp
private void ResetWhitelist()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OceanAws resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-spotinst.oceanAws.OceanAws.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

OceanAws.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-spotinst.oceanAws.OceanAws.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-spotinst.oceanAws.OceanAws.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

OceanAws.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-spotinst.oceanAws.OceanAws.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAws.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

OceanAws.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-spotinst.oceanAws.OceanAws.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-spotinst.oceanAws.OceanAws.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

OceanAws.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OceanAws resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-spotinst.oceanAws.OceanAws.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-spotinst.oceanAws.OceanAws.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OceanAws to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-spotinst.oceanAws.OceanAws.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OceanAws that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.oceanAws.OceanAws.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OceanAws to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.attachLoadBalancer">AttachLoadBalancer</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerList">OceanAwsAttachLoadBalancerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.autoscaler">Autoscaler</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference">OceanAwsAutoscalerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.blockDeviceMappings">BlockDeviceMappings</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList">OceanAwsBlockDeviceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.clusterOrientation">ClusterOrientation</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList">OceanAwsClusterOrientationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.detachLoadBalancer">DetachLoadBalancer</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerList">OceanAwsDetachLoadBalancerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.filters">Filters</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference">OceanAwsFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.instanceMetadataOptions">InstanceMetadataOptions</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference">OceanAwsInstanceMetadataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.loadBalancers">LoadBalancers</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList">OceanAwsLoadBalancersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.logging">Logging</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference">OceanAwsLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.resourceTagSpecification">ResourceTagSpecification</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationList">OceanAwsResourceTagSpecificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.scheduledTask">ScheduledTask</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference">OceanAwsScheduledTaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList">OceanAwsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.updatePolicy">UpdatePolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference">OceanAwsUpdatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.associateIpv6AddressInput">AssociateIpv6AddressInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.associatePublicIpAddressInput">AssociatePublicIpAddressInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.attachLoadBalancerInput">AttachLoadBalancerInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.autoscalerInput">AutoscalerInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler">OceanAwsAutoscaler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.blacklistInput">BlacklistInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.blockDeviceMappingsInput">BlockDeviceMappingsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.clusterOrientationInput">ClusterOrientationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.controllerIdInput">ControllerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.desiredCapacityInput">DesiredCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.detachLoadBalancerInput">DetachLoadBalancerInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.drainingTimeoutInput">DrainingTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.ebsOptimizedInput">EbsOptimizedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.fallbackToOndemandInput">FallbackToOndemandInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.filtersInput">FiltersInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters">OceanAwsFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.gracePeriodInput">GracePeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.healthCheckUnhealthyDurationBeforeReplacementInput">HealthCheckUnhealthyDurationBeforeReplacementInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.iamInstanceProfileInput">IamInstanceProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.imageIdInput">ImageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.instanceMetadataOptionsInput">InstanceMetadataOptionsInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptions">OceanAwsInstanceMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.keyNameInput">KeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.loadBalancersInput">LoadBalancersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.loggingInput">LoggingInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLogging">OceanAwsLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.maxSizeInput">MaxSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.minSizeInput">MinSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.monitoringInput">MonitoringInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.reservedEnisInput">ReservedEnisInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.resourceTagSpecificationInput">ResourceTagSpecificationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.rootVolumeSizeInput">RootVolumeSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.scheduledTaskInput">ScheduledTaskInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTask">OceanAwsScheduledTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.securityGroupsInput">SecurityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.spotPercentageInput">SpotPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.spreadNodesByInput">SpreadNodesByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.tagsInput">TagsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.updatePolicyInput">UpdatePolicyInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy">OceanAwsUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.useAsTemplateOnlyInput">UseAsTemplateOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.userDataInput">UserDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.utilizeCommitmentsInput">UtilizeCommitmentsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.utilizeReservedInstancesInput">UtilizeReservedInstancesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.whitelistInput">WhitelistInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.associateIpv6Address">AssociateIpv6Address</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.associatePublicIpAddress">AssociatePublicIpAddress</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.blacklist">Blacklist</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.controllerId">ControllerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.desiredCapacity">DesiredCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.drainingTimeout">DrainingTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.ebsOptimized">EbsOptimized</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.fallbackToOndemand">FallbackToOndemand</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.gracePeriod">GracePeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.healthCheckUnhealthyDurationBeforeReplacement">HealthCheckUnhealthyDurationBeforeReplacement</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.iamInstanceProfile">IamInstanceProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.imageId">ImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.keyName">KeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.maxSize">MaxSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.minSize">MinSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.monitoring">Monitoring</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.reservedEnis">ReservedEnis</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.rootVolumeSize">RootVolumeSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.spotPercentage">SpotPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.spreadNodesBy">SpreadNodesBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.useAsTemplateOnly">UseAsTemplateOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.userData">UserData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.utilizeCommitments">UtilizeCommitments</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.utilizeReservedInstances">UtilizeReservedInstances</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.whitelist">Whitelist</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AttachLoadBalancer`<sup>Required</sup> <a name="AttachLoadBalancer" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.attachLoadBalancer"></a>

```csharp
public OceanAwsAttachLoadBalancerList AttachLoadBalancer { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerList">OceanAwsAttachLoadBalancerList</a>

---

##### `Autoscaler`<sup>Required</sup> <a name="Autoscaler" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.autoscaler"></a>

```csharp
public OceanAwsAutoscalerOutputReference Autoscaler { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference">OceanAwsAutoscalerOutputReference</a>

---

##### `BlockDeviceMappings`<sup>Required</sup> <a name="BlockDeviceMappings" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.blockDeviceMappings"></a>

```csharp
public OceanAwsBlockDeviceMappingsList BlockDeviceMappings { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList">OceanAwsBlockDeviceMappingsList</a>

---

##### `ClusterOrientation`<sup>Required</sup> <a name="ClusterOrientation" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.clusterOrientation"></a>

```csharp
public OceanAwsClusterOrientationList ClusterOrientation { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList">OceanAwsClusterOrientationList</a>

---

##### `DetachLoadBalancer`<sup>Required</sup> <a name="DetachLoadBalancer" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.detachLoadBalancer"></a>

```csharp
public OceanAwsDetachLoadBalancerList DetachLoadBalancer { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerList">OceanAwsDetachLoadBalancerList</a>

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.filters"></a>

```csharp
public OceanAwsFiltersOutputReference Filters { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference">OceanAwsFiltersOutputReference</a>

---

##### `InstanceMetadataOptions`<sup>Required</sup> <a name="InstanceMetadataOptions" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.instanceMetadataOptions"></a>

```csharp
public OceanAwsInstanceMetadataOptionsOutputReference InstanceMetadataOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference">OceanAwsInstanceMetadataOptionsOutputReference</a>

---

##### `LoadBalancers`<sup>Required</sup> <a name="LoadBalancers" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.loadBalancers"></a>

```csharp
public OceanAwsLoadBalancersList LoadBalancers { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList">OceanAwsLoadBalancersList</a>

---

##### `Logging`<sup>Required</sup> <a name="Logging" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.logging"></a>

```csharp
public OceanAwsLoggingOutputReference Logging { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference">OceanAwsLoggingOutputReference</a>

---

##### `ResourceTagSpecification`<sup>Required</sup> <a name="ResourceTagSpecification" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.resourceTagSpecification"></a>

```csharp
public OceanAwsResourceTagSpecificationList ResourceTagSpecification { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationList">OceanAwsResourceTagSpecificationList</a>

---

##### `ScheduledTask`<sup>Required</sup> <a name="ScheduledTask" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.scheduledTask"></a>

```csharp
public OceanAwsScheduledTaskOutputReference ScheduledTask { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference">OceanAwsScheduledTaskOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.tags"></a>

```csharp
public OceanAwsTagsList Tags { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList">OceanAwsTagsList</a>

---

##### `UpdatePolicy`<sup>Required</sup> <a name="UpdatePolicy" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.updatePolicy"></a>

```csharp
public OceanAwsUpdatePolicyOutputReference UpdatePolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference">OceanAwsUpdatePolicyOutputReference</a>

---

##### `AssociateIpv6AddressInput`<sup>Optional</sup> <a name="AssociateIpv6AddressInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.associateIpv6AddressInput"></a>

```csharp
public object AssociateIpv6AddressInput { get; }
```

- *Type:* object

---

##### `AssociatePublicIpAddressInput`<sup>Optional</sup> <a name="AssociatePublicIpAddressInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.associatePublicIpAddressInput"></a>

```csharp
public object AssociatePublicIpAddressInput { get; }
```

- *Type:* object

---

##### `AttachLoadBalancerInput`<sup>Optional</sup> <a name="AttachLoadBalancerInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.attachLoadBalancerInput"></a>

```csharp
public object AttachLoadBalancerInput { get; }
```

- *Type:* object

---

##### `AutoscalerInput`<sup>Optional</sup> <a name="AutoscalerInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.autoscalerInput"></a>

```csharp
public OceanAwsAutoscaler AutoscalerInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler">OceanAwsAutoscaler</a>

---

##### `BlacklistInput`<sup>Optional</sup> <a name="BlacklistInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.blacklistInput"></a>

```csharp
public string[] BlacklistInput { get; }
```

- *Type:* string[]

---

##### `BlockDeviceMappingsInput`<sup>Optional</sup> <a name="BlockDeviceMappingsInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.blockDeviceMappingsInput"></a>

```csharp
public object BlockDeviceMappingsInput { get; }
```

- *Type:* object

---

##### `ClusterOrientationInput`<sup>Optional</sup> <a name="ClusterOrientationInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.clusterOrientationInput"></a>

```csharp
public object ClusterOrientationInput { get; }
```

- *Type:* object

---

##### `ControllerIdInput`<sup>Optional</sup> <a name="ControllerIdInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.controllerIdInput"></a>

```csharp
public string ControllerIdInput { get; }
```

- *Type:* string

---

##### `DesiredCapacityInput`<sup>Optional</sup> <a name="DesiredCapacityInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.desiredCapacityInput"></a>

```csharp
public double DesiredCapacityInput { get; }
```

- *Type:* double

---

##### `DetachLoadBalancerInput`<sup>Optional</sup> <a name="DetachLoadBalancerInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.detachLoadBalancerInput"></a>

```csharp
public object DetachLoadBalancerInput { get; }
```

- *Type:* object

---

##### `DrainingTimeoutInput`<sup>Optional</sup> <a name="DrainingTimeoutInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.drainingTimeoutInput"></a>

```csharp
public double DrainingTimeoutInput { get; }
```

- *Type:* double

---

##### `EbsOptimizedInput`<sup>Optional</sup> <a name="EbsOptimizedInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.ebsOptimizedInput"></a>

```csharp
public object EbsOptimizedInput { get; }
```

- *Type:* object

---

##### `FallbackToOndemandInput`<sup>Optional</sup> <a name="FallbackToOndemandInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.fallbackToOndemandInput"></a>

```csharp
public object FallbackToOndemandInput { get; }
```

- *Type:* object

---

##### `FiltersInput`<sup>Optional</sup> <a name="FiltersInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.filtersInput"></a>

```csharp
public OceanAwsFilters FiltersInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters">OceanAwsFilters</a>

---

##### `GracePeriodInput`<sup>Optional</sup> <a name="GracePeriodInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.gracePeriodInput"></a>

```csharp
public double GracePeriodInput { get; }
```

- *Type:* double

---

##### `HealthCheckUnhealthyDurationBeforeReplacementInput`<sup>Optional</sup> <a name="HealthCheckUnhealthyDurationBeforeReplacementInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.healthCheckUnhealthyDurationBeforeReplacementInput"></a>

```csharp
public double HealthCheckUnhealthyDurationBeforeReplacementInput { get; }
```

- *Type:* double

---

##### `IamInstanceProfileInput`<sup>Optional</sup> <a name="IamInstanceProfileInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.iamInstanceProfileInput"></a>

```csharp
public string IamInstanceProfileInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImageIdInput`<sup>Optional</sup> <a name="ImageIdInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.imageIdInput"></a>

```csharp
public string ImageIdInput { get; }
```

- *Type:* string

---

##### `InstanceMetadataOptionsInput`<sup>Optional</sup> <a name="InstanceMetadataOptionsInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.instanceMetadataOptionsInput"></a>

```csharp
public OceanAwsInstanceMetadataOptions InstanceMetadataOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptions">OceanAwsInstanceMetadataOptions</a>

---

##### `KeyNameInput`<sup>Optional</sup> <a name="KeyNameInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.keyNameInput"></a>

```csharp
public string KeyNameInput { get; }
```

- *Type:* string

---

##### `LoadBalancersInput`<sup>Optional</sup> <a name="LoadBalancersInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.loadBalancersInput"></a>

```csharp
public object LoadBalancersInput { get; }
```

- *Type:* object

---

##### `LoggingInput`<sup>Optional</sup> <a name="LoggingInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.loggingInput"></a>

```csharp
public OceanAwsLogging LoggingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLogging">OceanAwsLogging</a>

---

##### `MaxSizeInput`<sup>Optional</sup> <a name="MaxSizeInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.maxSizeInput"></a>

```csharp
public double MaxSizeInput { get; }
```

- *Type:* double

---

##### `MinSizeInput`<sup>Optional</sup> <a name="MinSizeInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.minSizeInput"></a>

```csharp
public double MinSizeInput { get; }
```

- *Type:* double

---

##### `MonitoringInput`<sup>Optional</sup> <a name="MonitoringInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.monitoringInput"></a>

```csharp
public object MonitoringInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ReservedEnisInput`<sup>Optional</sup> <a name="ReservedEnisInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.reservedEnisInput"></a>

```csharp
public double ReservedEnisInput { get; }
```

- *Type:* double

---

##### `ResourceTagSpecificationInput`<sup>Optional</sup> <a name="ResourceTagSpecificationInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.resourceTagSpecificationInput"></a>

```csharp
public object ResourceTagSpecificationInput { get; }
```

- *Type:* object

---

##### `RootVolumeSizeInput`<sup>Optional</sup> <a name="RootVolumeSizeInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.rootVolumeSizeInput"></a>

```csharp
public double RootVolumeSizeInput { get; }
```

- *Type:* double

---

##### `ScheduledTaskInput`<sup>Optional</sup> <a name="ScheduledTaskInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.scheduledTaskInput"></a>

```csharp
public OceanAwsScheduledTask ScheduledTaskInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTask">OceanAwsScheduledTask</a>

---

##### `SecurityGroupsInput`<sup>Optional</sup> <a name="SecurityGroupsInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.securityGroupsInput"></a>

```csharp
public string[] SecurityGroupsInput { get; }
```

- *Type:* string[]

---

##### `SpotPercentageInput`<sup>Optional</sup> <a name="SpotPercentageInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.spotPercentageInput"></a>

```csharp
public double SpotPercentageInput { get; }
```

- *Type:* double

---

##### `SpreadNodesByInput`<sup>Optional</sup> <a name="SpreadNodesByInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.spreadNodesByInput"></a>

```csharp
public string SpreadNodesByInput { get; }
```

- *Type:* string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.tagsInput"></a>

```csharp
public object TagsInput { get; }
```

- *Type:* object

---

##### `UpdatePolicyInput`<sup>Optional</sup> <a name="UpdatePolicyInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.updatePolicyInput"></a>

```csharp
public OceanAwsUpdatePolicy UpdatePolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy">OceanAwsUpdatePolicy</a>

---

##### `UseAsTemplateOnlyInput`<sup>Optional</sup> <a name="UseAsTemplateOnlyInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.useAsTemplateOnlyInput"></a>

```csharp
public object UseAsTemplateOnlyInput { get; }
```

- *Type:* object

---

##### `UserDataInput`<sup>Optional</sup> <a name="UserDataInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.userDataInput"></a>

```csharp
public string UserDataInput { get; }
```

- *Type:* string

---

##### `UtilizeCommitmentsInput`<sup>Optional</sup> <a name="UtilizeCommitmentsInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.utilizeCommitmentsInput"></a>

```csharp
public object UtilizeCommitmentsInput { get; }
```

- *Type:* object

---

##### `UtilizeReservedInstancesInput`<sup>Optional</sup> <a name="UtilizeReservedInstancesInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.utilizeReservedInstancesInput"></a>

```csharp
public object UtilizeReservedInstancesInput { get; }
```

- *Type:* object

---

##### `WhitelistInput`<sup>Optional</sup> <a name="WhitelistInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.whitelistInput"></a>

```csharp
public string[] WhitelistInput { get; }
```

- *Type:* string[]

---

##### `AssociateIpv6Address`<sup>Required</sup> <a name="AssociateIpv6Address" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.associateIpv6Address"></a>

```csharp
public object AssociateIpv6Address { get; }
```

- *Type:* object

---

##### `AssociatePublicIpAddress`<sup>Required</sup> <a name="AssociatePublicIpAddress" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.associatePublicIpAddress"></a>

```csharp
public object AssociatePublicIpAddress { get; }
```

- *Type:* object

---

##### `Blacklist`<sup>Required</sup> <a name="Blacklist" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.blacklist"></a>

```csharp
public string[] Blacklist { get; }
```

- *Type:* string[]

---

##### `ControllerId`<sup>Required</sup> <a name="ControllerId" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.controllerId"></a>

```csharp
public string ControllerId { get; }
```

- *Type:* string

---

##### `DesiredCapacity`<sup>Required</sup> <a name="DesiredCapacity" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.desiredCapacity"></a>

```csharp
public double DesiredCapacity { get; }
```

- *Type:* double

---

##### `DrainingTimeout`<sup>Required</sup> <a name="DrainingTimeout" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.drainingTimeout"></a>

```csharp
public double DrainingTimeout { get; }
```

- *Type:* double

---

##### `EbsOptimized`<sup>Required</sup> <a name="EbsOptimized" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.ebsOptimized"></a>

```csharp
public object EbsOptimized { get; }
```

- *Type:* object

---

##### `FallbackToOndemand`<sup>Required</sup> <a name="FallbackToOndemand" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.fallbackToOndemand"></a>

```csharp
public object FallbackToOndemand { get; }
```

- *Type:* object

---

##### `GracePeriod`<sup>Required</sup> <a name="GracePeriod" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.gracePeriod"></a>

```csharp
public double GracePeriod { get; }
```

- *Type:* double

---

##### `HealthCheckUnhealthyDurationBeforeReplacement`<sup>Required</sup> <a name="HealthCheckUnhealthyDurationBeforeReplacement" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.healthCheckUnhealthyDurationBeforeReplacement"></a>

```csharp
public double HealthCheckUnhealthyDurationBeforeReplacement { get; }
```

- *Type:* double

---

##### `IamInstanceProfile`<sup>Required</sup> <a name="IamInstanceProfile" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.iamInstanceProfile"></a>

```csharp
public string IamInstanceProfile { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.imageId"></a>

```csharp
public string ImageId { get; }
```

- *Type:* string

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.keyName"></a>

```csharp
public string KeyName { get; }
```

- *Type:* string

---

##### `MaxSize`<sup>Required</sup> <a name="MaxSize" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.maxSize"></a>

```csharp
public double MaxSize { get; }
```

- *Type:* double

---

##### `MinSize`<sup>Required</sup> <a name="MinSize" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.minSize"></a>

```csharp
public double MinSize { get; }
```

- *Type:* double

---

##### `Monitoring`<sup>Required</sup> <a name="Monitoring" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.monitoring"></a>

```csharp
public object Monitoring { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ReservedEnis`<sup>Required</sup> <a name="ReservedEnis" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.reservedEnis"></a>

```csharp
public double ReservedEnis { get; }
```

- *Type:* double

---

##### `RootVolumeSize`<sup>Required</sup> <a name="RootVolumeSize" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.rootVolumeSize"></a>

```csharp
public double RootVolumeSize { get; }
```

- *Type:* double

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; }
```

- *Type:* string[]

---

##### `SpotPercentage`<sup>Required</sup> <a name="SpotPercentage" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.spotPercentage"></a>

```csharp
public double SpotPercentage { get; }
```

- *Type:* double

---

##### `SpreadNodesBy`<sup>Required</sup> <a name="SpreadNodesBy" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.spreadNodesBy"></a>

```csharp
public string SpreadNodesBy { get; }
```

- *Type:* string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `UseAsTemplateOnly`<sup>Required</sup> <a name="UseAsTemplateOnly" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.useAsTemplateOnly"></a>

```csharp
public object UseAsTemplateOnly { get; }
```

- *Type:* object

---

##### `UserData`<sup>Required</sup> <a name="UserData" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.userData"></a>

```csharp
public string UserData { get; }
```

- *Type:* string

---

##### `UtilizeCommitments`<sup>Required</sup> <a name="UtilizeCommitments" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.utilizeCommitments"></a>

```csharp
public object UtilizeCommitments { get; }
```

- *Type:* object

---

##### `UtilizeReservedInstances`<sup>Required</sup> <a name="UtilizeReservedInstances" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.utilizeReservedInstances"></a>

```csharp
public object UtilizeReservedInstances { get; }
```

- *Type:* object

---

##### `Whitelist`<sup>Required</sup> <a name="Whitelist" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.whitelist"></a>

```csharp
public string[] Whitelist { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OceanAwsAttachLoadBalancer <a name="OceanAwsAttachLoadBalancer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsAttachLoadBalancer {
    string Type,
    string Arn = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancer.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#type OceanAws#type}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancer.property.arn">Arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#arn OceanAws#arn}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancer.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#name OceanAws#name}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancer.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#type OceanAws#type}.

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancer.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#arn OceanAws#arn}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancer.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#name OceanAws#name}.

---

### OceanAwsAutoscaler <a name="OceanAwsAutoscaler" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsAutoscaler {
    double AutoHeadroomPercentage = null,
    double AutoscaleCooldown = null,
    OceanAwsAutoscalerAutoscaleDown AutoscaleDown = null,
    OceanAwsAutoscalerAutoscaleHeadroom AutoscaleHeadroom = null,
    object AutoscaleIsAutoConfig = null,
    object AutoscaleIsEnabled = null,
    object EnableAutomaticAndManualHeadroom = null,
    string[] ExtendedResourceDefinitions = null,
    OceanAwsAutoscalerResourceLimits ResourceLimits = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.autoHeadroomPercentage">AutoHeadroomPercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#auto_headroom_percentage OceanAws#auto_headroom_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.autoscaleCooldown">AutoscaleCooldown</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#autoscale_cooldown OceanAws#autoscale_cooldown}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.autoscaleDown">AutoscaleDown</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDown">OceanAwsAutoscalerAutoscaleDown</a></code> | autoscale_down block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.autoscaleHeadroom">AutoscaleHeadroom</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom">OceanAwsAutoscalerAutoscaleHeadroom</a></code> | autoscale_headroom block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.autoscaleIsAutoConfig">AutoscaleIsAutoConfig</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#autoscale_is_auto_config OceanAws#autoscale_is_auto_config}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.autoscaleIsEnabled">AutoscaleIsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#autoscale_is_enabled OceanAws#autoscale_is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.enableAutomaticAndManualHeadroom">EnableAutomaticAndManualHeadroom</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#enable_automatic_and_manual_headroom OceanAws#enable_automatic_and_manual_headroom}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.extendedResourceDefinitions">ExtendedResourceDefinitions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#extended_resource_definitions OceanAws#extended_resource_definitions}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.resourceLimits">ResourceLimits</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimits">OceanAwsAutoscalerResourceLimits</a></code> | resource_limits block. |

---

##### `AutoHeadroomPercentage`<sup>Optional</sup> <a name="AutoHeadroomPercentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.autoHeadroomPercentage"></a>

```csharp
public double AutoHeadroomPercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#auto_headroom_percentage OceanAws#auto_headroom_percentage}.

---

##### `AutoscaleCooldown`<sup>Optional</sup> <a name="AutoscaleCooldown" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.autoscaleCooldown"></a>

```csharp
public double AutoscaleCooldown { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#autoscale_cooldown OceanAws#autoscale_cooldown}.

---

##### `AutoscaleDown`<sup>Optional</sup> <a name="AutoscaleDown" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.autoscaleDown"></a>

```csharp
public OceanAwsAutoscalerAutoscaleDown AutoscaleDown { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDown">OceanAwsAutoscalerAutoscaleDown</a>

autoscale_down block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#autoscale_down OceanAws#autoscale_down}

---

##### `AutoscaleHeadroom`<sup>Optional</sup> <a name="AutoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.autoscaleHeadroom"></a>

```csharp
public OceanAwsAutoscalerAutoscaleHeadroom AutoscaleHeadroom { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom">OceanAwsAutoscalerAutoscaleHeadroom</a>

autoscale_headroom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#autoscale_headroom OceanAws#autoscale_headroom}

---

##### `AutoscaleIsAutoConfig`<sup>Optional</sup> <a name="AutoscaleIsAutoConfig" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.autoscaleIsAutoConfig"></a>

```csharp
public object AutoscaleIsAutoConfig { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#autoscale_is_auto_config OceanAws#autoscale_is_auto_config}.

---

##### `AutoscaleIsEnabled`<sup>Optional</sup> <a name="AutoscaleIsEnabled" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.autoscaleIsEnabled"></a>

```csharp
public object AutoscaleIsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#autoscale_is_enabled OceanAws#autoscale_is_enabled}.

---

##### `EnableAutomaticAndManualHeadroom`<sup>Optional</sup> <a name="EnableAutomaticAndManualHeadroom" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.enableAutomaticAndManualHeadroom"></a>

```csharp
public object EnableAutomaticAndManualHeadroom { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#enable_automatic_and_manual_headroom OceanAws#enable_automatic_and_manual_headroom}.

---

##### `ExtendedResourceDefinitions`<sup>Optional</sup> <a name="ExtendedResourceDefinitions" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.extendedResourceDefinitions"></a>

```csharp
public string[] ExtendedResourceDefinitions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#extended_resource_definitions OceanAws#extended_resource_definitions}.

---

##### `ResourceLimits`<sup>Optional</sup> <a name="ResourceLimits" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.resourceLimits"></a>

```csharp
public OceanAwsAutoscalerResourceLimits ResourceLimits { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimits">OceanAwsAutoscalerResourceLimits</a>

resource_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#resource_limits OceanAws#resource_limits}

---

### OceanAwsAutoscalerAutoscaleDown <a name="OceanAwsAutoscalerAutoscaleDown" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDown"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDown.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsAutoscalerAutoscaleDown {
    double EvaluationPeriods = null,
    object IsAggressiveScaleDownEnabled = null,
    double MaxScaleDownPercentage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDown.property.evaluationPeriods">EvaluationPeriods</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#evaluation_periods OceanAws#evaluation_periods}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDown.property.isAggressiveScaleDownEnabled">IsAggressiveScaleDownEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#is_aggressive_scale_down_enabled OceanAws#is_aggressive_scale_down_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDown.property.maxScaleDownPercentage">MaxScaleDownPercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#max_scale_down_percentage OceanAws#max_scale_down_percentage}. |

---

##### `EvaluationPeriods`<sup>Optional</sup> <a name="EvaluationPeriods" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDown.property.evaluationPeriods"></a>

```csharp
public double EvaluationPeriods { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#evaluation_periods OceanAws#evaluation_periods}.

---

##### `IsAggressiveScaleDownEnabled`<sup>Optional</sup> <a name="IsAggressiveScaleDownEnabled" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDown.property.isAggressiveScaleDownEnabled"></a>

```csharp
public object IsAggressiveScaleDownEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#is_aggressive_scale_down_enabled OceanAws#is_aggressive_scale_down_enabled}.

---

##### `MaxScaleDownPercentage`<sup>Optional</sup> <a name="MaxScaleDownPercentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDown.property.maxScaleDownPercentage"></a>

```csharp
public double MaxScaleDownPercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#max_scale_down_percentage OceanAws#max_scale_down_percentage}.

---

### OceanAwsAutoscalerAutoscaleHeadroom <a name="OceanAwsAutoscalerAutoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsAutoscalerAutoscaleHeadroom {
    double CpuPerUnit = null,
    double GpuPerUnit = null,
    double MemoryPerUnit = null,
    double NumOfUnits = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom.property.cpuPerUnit">CpuPerUnit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#cpu_per_unit OceanAws#cpu_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom.property.gpuPerUnit">GpuPerUnit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#gpu_per_unit OceanAws#gpu_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom.property.memoryPerUnit">MemoryPerUnit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#memory_per_unit OceanAws#memory_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom.property.numOfUnits">NumOfUnits</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#num_of_units OceanAws#num_of_units}. |

---

##### `CpuPerUnit`<sup>Optional</sup> <a name="CpuPerUnit" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom.property.cpuPerUnit"></a>

```csharp
public double CpuPerUnit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#cpu_per_unit OceanAws#cpu_per_unit}.

---

##### `GpuPerUnit`<sup>Optional</sup> <a name="GpuPerUnit" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom.property.gpuPerUnit"></a>

```csharp
public double GpuPerUnit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#gpu_per_unit OceanAws#gpu_per_unit}.

---

##### `MemoryPerUnit`<sup>Optional</sup> <a name="MemoryPerUnit" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom.property.memoryPerUnit"></a>

```csharp
public double MemoryPerUnit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#memory_per_unit OceanAws#memory_per_unit}.

---

##### `NumOfUnits`<sup>Optional</sup> <a name="NumOfUnits" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom.property.numOfUnits"></a>

```csharp
public double NumOfUnits { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#num_of_units OceanAws#num_of_units}.

---

### OceanAwsAutoscalerResourceLimits <a name="OceanAwsAutoscalerResourceLimits" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimits.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsAutoscalerResourceLimits {
    double MaxMemoryGib = null,
    double MaxVcpu = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimits.property.maxMemoryGib">MaxMemoryGib</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#max_memory_gib OceanAws#max_memory_gib}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimits.property.maxVcpu">MaxVcpu</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#max_vcpu OceanAws#max_vcpu}. |

---

##### `MaxMemoryGib`<sup>Optional</sup> <a name="MaxMemoryGib" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimits.property.maxMemoryGib"></a>

```csharp
public double MaxMemoryGib { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#max_memory_gib OceanAws#max_memory_gib}.

---

##### `MaxVcpu`<sup>Optional</sup> <a name="MaxVcpu" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimits.property.maxVcpu"></a>

```csharp
public double MaxVcpu { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#max_vcpu OceanAws#max_vcpu}.

---

### OceanAwsBlockDeviceMappings <a name="OceanAwsBlockDeviceMappings" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsBlockDeviceMappings {
    string DeviceName = null,
    OceanAwsBlockDeviceMappingsEbs Ebs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappings.property.deviceName">DeviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#device_name OceanAws#device_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappings.property.ebs">Ebs</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs">OceanAwsBlockDeviceMappingsEbs</a></code> | ebs block. |

---

##### `DeviceName`<sup>Optional</sup> <a name="DeviceName" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappings.property.deviceName"></a>

```csharp
public string DeviceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#device_name OceanAws#device_name}.

---

##### `Ebs`<sup>Optional</sup> <a name="Ebs" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappings.property.ebs"></a>

```csharp
public OceanAwsBlockDeviceMappingsEbs Ebs { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs">OceanAwsBlockDeviceMappingsEbs</a>

ebs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#ebs OceanAws#ebs}

---

### OceanAwsBlockDeviceMappingsEbs <a name="OceanAwsBlockDeviceMappingsEbs" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsBlockDeviceMappingsEbs {
    object DeleteOnTermination = null,
    OceanAwsBlockDeviceMappingsEbsDynamicIops DynamicIops = null,
    OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize DynamicVolumeSize = null,
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
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#delete_on_termination OceanAws#delete_on_termination}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs.property.dynamicIops">DynamicIops</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIops">OceanAwsBlockDeviceMappingsEbsDynamicIops</a></code> | dynamic_iops block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs.property.dynamicVolumeSize">DynamicVolumeSize</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize">OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize</a></code> | dynamic_volume_size block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs.property.encrypted">Encrypted</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#encrypted OceanAws#encrypted}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs.property.iops">Iops</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#iops OceanAws#iops}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#kms_key_id OceanAws#kms_key_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs.property.snapshotId">SnapshotId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#snapshot_id OceanAws#snapshot_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs.property.throughput">Throughput</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#throughput OceanAws#throughput}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs.property.volumeSize">VolumeSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#volume_size OceanAws#volume_size}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs.property.volumeType">VolumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#volume_type OceanAws#volume_type}. |

---

##### `DeleteOnTermination`<sup>Optional</sup> <a name="DeleteOnTermination" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs.property.deleteOnTermination"></a>

```csharp
public object DeleteOnTermination { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#delete_on_termination OceanAws#delete_on_termination}.

---

##### `DynamicIops`<sup>Optional</sup> <a name="DynamicIops" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs.property.dynamicIops"></a>

```csharp
public OceanAwsBlockDeviceMappingsEbsDynamicIops DynamicIops { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIops">OceanAwsBlockDeviceMappingsEbsDynamicIops</a>

dynamic_iops block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#dynamic_iops OceanAws#dynamic_iops}

---

##### `DynamicVolumeSize`<sup>Optional</sup> <a name="DynamicVolumeSize" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs.property.dynamicVolumeSize"></a>

```csharp
public OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize DynamicVolumeSize { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize">OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize</a>

dynamic_volume_size block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#dynamic_volume_size OceanAws#dynamic_volume_size}

---

##### `Encrypted`<sup>Optional</sup> <a name="Encrypted" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs.property.encrypted"></a>

```csharp
public object Encrypted { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#encrypted OceanAws#encrypted}.

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs.property.iops"></a>

```csharp
public double Iops { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#iops OceanAws#iops}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#kms_key_id OceanAws#kms_key_id}.

---

##### `SnapshotId`<sup>Optional</sup> <a name="SnapshotId" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs.property.snapshotId"></a>

```csharp
public string SnapshotId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#snapshot_id OceanAws#snapshot_id}.

---

##### `Throughput`<sup>Optional</sup> <a name="Throughput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs.property.throughput"></a>

```csharp
public double Throughput { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#throughput OceanAws#throughput}.

---

##### `VolumeSize`<sup>Optional</sup> <a name="VolumeSize" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs.property.volumeSize"></a>

```csharp
public double VolumeSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#volume_size OceanAws#volume_size}.

---

##### `VolumeType`<sup>Optional</sup> <a name="VolumeType" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs.property.volumeType"></a>

```csharp
public string VolumeType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#volume_type OceanAws#volume_type}.

---

### OceanAwsBlockDeviceMappingsEbsDynamicIops <a name="OceanAwsBlockDeviceMappingsEbsDynamicIops" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIops"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIops.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsBlockDeviceMappingsEbsDynamicIops {
    double BaseSize,
    string Resource,
    double SizePerResourceUnit
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIops.property.baseSize">BaseSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#base_size OceanAws#base_size}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIops.property.resource">Resource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#resource OceanAws#resource}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIops.property.sizePerResourceUnit">SizePerResourceUnit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#size_per_resource_unit OceanAws#size_per_resource_unit}. |

---

##### `BaseSize`<sup>Required</sup> <a name="BaseSize" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIops.property.baseSize"></a>

```csharp
public double BaseSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#base_size OceanAws#base_size}.

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIops.property.resource"></a>

```csharp
public string Resource { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#resource OceanAws#resource}.

---

##### `SizePerResourceUnit`<sup>Required</sup> <a name="SizePerResourceUnit" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIops.property.sizePerResourceUnit"></a>

```csharp
public double SizePerResourceUnit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#size_per_resource_unit OceanAws#size_per_resource_unit}.

---

### OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize <a name="OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize {
    double BaseSize,
    string Resource,
    double SizePerResourceUnit
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize.property.baseSize">BaseSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#base_size OceanAws#base_size}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize.property.resource">Resource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#resource OceanAws#resource}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize.property.sizePerResourceUnit">SizePerResourceUnit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#size_per_resource_unit OceanAws#size_per_resource_unit}. |

---

##### `BaseSize`<sup>Required</sup> <a name="BaseSize" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize.property.baseSize"></a>

```csharp
public double BaseSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#base_size OceanAws#base_size}.

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize.property.resource"></a>

```csharp
public string Resource { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#resource OceanAws#resource}.

---

##### `SizePerResourceUnit`<sup>Required</sup> <a name="SizePerResourceUnit" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize.property.sizePerResourceUnit"></a>

```csharp
public double SizePerResourceUnit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#size_per_resource_unit OceanAws#size_per_resource_unit}.

---

### OceanAwsClusterOrientation <a name="OceanAwsClusterOrientation" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsClusterOrientation {
    string AvailabilityVsCost = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientation.property.availabilityVsCost">AvailabilityVsCost</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#availability_vs_cost OceanAws#availability_vs_cost}. |

---

##### `AvailabilityVsCost`<sup>Optional</sup> <a name="AvailabilityVsCost" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientation.property.availabilityVsCost"></a>

```csharp
public string AvailabilityVsCost { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#availability_vs_cost OceanAws#availability_vs_cost}.

---

### OceanAwsConfig <a name="OceanAwsConfig" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ImageId,
    string[] SecurityGroups,
    string[] SubnetIds,
    object AssociateIpv6Address = null,
    object AssociatePublicIpAddress = null,
    object AttachLoadBalancer = null,
    OceanAwsAutoscaler Autoscaler = null,
    string[] Blacklist = null,
    object BlockDeviceMappings = null,
    object ClusterOrientation = null,
    string ControllerId = null,
    double DesiredCapacity = null,
    object DetachLoadBalancer = null,
    double DrainingTimeout = null,
    object EbsOptimized = null,
    object FallbackToOndemand = null,
    OceanAwsFilters Filters = null,
    double GracePeriod = null,
    double HealthCheckUnhealthyDurationBeforeReplacement = null,
    string IamInstanceProfile = null,
    string Id = null,
    OceanAwsInstanceMetadataOptions InstanceMetadataOptions = null,
    string KeyName = null,
    object LoadBalancers = null,
    OceanAwsLogging Logging = null,
    double MaxSize = null,
    double MinSize = null,
    object Monitoring = null,
    string Name = null,
    string Region = null,
    double ReservedEnis = null,
    object ResourceTagSpecification = null,
    double RootVolumeSize = null,
    OceanAwsScheduledTask ScheduledTask = null,
    double SpotPercentage = null,
    string SpreadNodesBy = null,
    object Tags = null,
    OceanAwsUpdatePolicy UpdatePolicy = null,
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
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.imageId">ImageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#image_id OceanAws#image_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#security_groups OceanAws#security_groups}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#subnet_ids OceanAws#subnet_ids}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.associateIpv6Address">AssociateIpv6Address</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#associate_ipv6_address OceanAws#associate_ipv6_address}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.associatePublicIpAddress">AssociatePublicIpAddress</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#associate_public_ip_address OceanAws#associate_public_ip_address}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.attachLoadBalancer">AttachLoadBalancer</a></code> | <code>object</code> | attach_load_balancer block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.autoscaler">Autoscaler</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler">OceanAwsAutoscaler</a></code> | autoscaler block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.blacklist">Blacklist</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#blacklist OceanAws#blacklist}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.blockDeviceMappings">BlockDeviceMappings</a></code> | <code>object</code> | block_device_mappings block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.clusterOrientation">ClusterOrientation</a></code> | <code>object</code> | cluster_orientation block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.controllerId">ControllerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#controller_id OceanAws#controller_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.desiredCapacity">DesiredCapacity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#desired_capacity OceanAws#desired_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.detachLoadBalancer">DetachLoadBalancer</a></code> | <code>object</code> | detach_load_balancer block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.drainingTimeout">DrainingTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#draining_timeout OceanAws#draining_timeout}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.ebsOptimized">EbsOptimized</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#ebs_optimized OceanAws#ebs_optimized}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.fallbackToOndemand">FallbackToOndemand</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#fallback_to_ondemand OceanAws#fallback_to_ondemand}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.filters">Filters</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters">OceanAwsFilters</a></code> | filters block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.gracePeriod">GracePeriod</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#grace_period OceanAws#grace_period}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.healthCheckUnhealthyDurationBeforeReplacement">HealthCheckUnhealthyDurationBeforeReplacement</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#health_check_unhealthy_duration_before_replacement OceanAws#health_check_unhealthy_duration_before_replacement}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.iamInstanceProfile">IamInstanceProfile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#iam_instance_profile OceanAws#iam_instance_profile}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#id OceanAws#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.instanceMetadataOptions">InstanceMetadataOptions</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptions">OceanAwsInstanceMetadataOptions</a></code> | instance_metadata_options block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.keyName">KeyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#key_name OceanAws#key_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.loadBalancers">LoadBalancers</a></code> | <code>object</code> | load_balancers block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.logging">Logging</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLogging">OceanAwsLogging</a></code> | logging block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.maxSize">MaxSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#max_size OceanAws#max_size}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.minSize">MinSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#min_size OceanAws#min_size}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.monitoring">Monitoring</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#monitoring OceanAws#monitoring}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#name OceanAws#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#region OceanAws#region}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.reservedEnis">ReservedEnis</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#reserved_enis OceanAws#reserved_enis}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.resourceTagSpecification">ResourceTagSpecification</a></code> | <code>object</code> | resource_tag_specification block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.rootVolumeSize">RootVolumeSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#root_volume_size OceanAws#root_volume_size}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.scheduledTask">ScheduledTask</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTask">OceanAwsScheduledTask</a></code> | scheduled_task block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.spotPercentage">SpotPercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#spot_percentage OceanAws#spot_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.spreadNodesBy">SpreadNodesBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#spread_nodes_by OceanAws#spread_nodes_by}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.tags">Tags</a></code> | <code>object</code> | tags block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.updatePolicy">UpdatePolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy">OceanAwsUpdatePolicy</a></code> | update_policy block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.useAsTemplateOnly">UseAsTemplateOnly</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#use_as_template_only OceanAws#use_as_template_only}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.userData">UserData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#user_data OceanAws#user_data}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.utilizeCommitments">UtilizeCommitments</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#utilize_commitments OceanAws#utilize_commitments}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.utilizeReservedInstances">UtilizeReservedInstances</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#utilize_reserved_instances OceanAws#utilize_reserved_instances}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.whitelist">Whitelist</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#whitelist OceanAws#whitelist}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.imageId"></a>

```csharp
public string ImageId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#image_id OceanAws#image_id}.

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#security_groups OceanAws#security_groups}.

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#subnet_ids OceanAws#subnet_ids}.

---

##### `AssociateIpv6Address`<sup>Optional</sup> <a name="AssociateIpv6Address" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.associateIpv6Address"></a>

```csharp
public object AssociateIpv6Address { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#associate_ipv6_address OceanAws#associate_ipv6_address}.

---

##### `AssociatePublicIpAddress`<sup>Optional</sup> <a name="AssociatePublicIpAddress" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.associatePublicIpAddress"></a>

```csharp
public object AssociatePublicIpAddress { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#associate_public_ip_address OceanAws#associate_public_ip_address}.

---

##### `AttachLoadBalancer`<sup>Optional</sup> <a name="AttachLoadBalancer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.attachLoadBalancer"></a>

```csharp
public object AttachLoadBalancer { get; set; }
```

- *Type:* object

attach_load_balancer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#attach_load_balancer OceanAws#attach_load_balancer}

---

##### `Autoscaler`<sup>Optional</sup> <a name="Autoscaler" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.autoscaler"></a>

```csharp
public OceanAwsAutoscaler Autoscaler { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler">OceanAwsAutoscaler</a>

autoscaler block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#autoscaler OceanAws#autoscaler}

---

##### `Blacklist`<sup>Optional</sup> <a name="Blacklist" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.blacklist"></a>

```csharp
public string[] Blacklist { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#blacklist OceanAws#blacklist}.

---

##### `BlockDeviceMappings`<sup>Optional</sup> <a name="BlockDeviceMappings" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.blockDeviceMappings"></a>

```csharp
public object BlockDeviceMappings { get; set; }
```

- *Type:* object

block_device_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#block_device_mappings OceanAws#block_device_mappings}

---

##### `ClusterOrientation`<sup>Optional</sup> <a name="ClusterOrientation" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.clusterOrientation"></a>

```csharp
public object ClusterOrientation { get; set; }
```

- *Type:* object

cluster_orientation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#cluster_orientation OceanAws#cluster_orientation}

---

##### `ControllerId`<sup>Optional</sup> <a name="ControllerId" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.controllerId"></a>

```csharp
public string ControllerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#controller_id OceanAws#controller_id}.

---

##### `DesiredCapacity`<sup>Optional</sup> <a name="DesiredCapacity" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.desiredCapacity"></a>

```csharp
public double DesiredCapacity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#desired_capacity OceanAws#desired_capacity}.

---

##### `DetachLoadBalancer`<sup>Optional</sup> <a name="DetachLoadBalancer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.detachLoadBalancer"></a>

```csharp
public object DetachLoadBalancer { get; set; }
```

- *Type:* object

detach_load_balancer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#detach_load_balancer OceanAws#detach_load_balancer}

---

##### `DrainingTimeout`<sup>Optional</sup> <a name="DrainingTimeout" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.drainingTimeout"></a>

```csharp
public double DrainingTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#draining_timeout OceanAws#draining_timeout}.

---

##### `EbsOptimized`<sup>Optional</sup> <a name="EbsOptimized" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.ebsOptimized"></a>

```csharp
public object EbsOptimized { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#ebs_optimized OceanAws#ebs_optimized}.

---

##### `FallbackToOndemand`<sup>Optional</sup> <a name="FallbackToOndemand" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.fallbackToOndemand"></a>

```csharp
public object FallbackToOndemand { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#fallback_to_ondemand OceanAws#fallback_to_ondemand}.

---

##### `Filters`<sup>Optional</sup> <a name="Filters" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.filters"></a>

```csharp
public OceanAwsFilters Filters { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters">OceanAwsFilters</a>

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#filters OceanAws#filters}

---

##### `GracePeriod`<sup>Optional</sup> <a name="GracePeriod" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.gracePeriod"></a>

```csharp
public double GracePeriod { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#grace_period OceanAws#grace_period}.

---

##### `HealthCheckUnhealthyDurationBeforeReplacement`<sup>Optional</sup> <a name="HealthCheckUnhealthyDurationBeforeReplacement" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.healthCheckUnhealthyDurationBeforeReplacement"></a>

```csharp
public double HealthCheckUnhealthyDurationBeforeReplacement { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#health_check_unhealthy_duration_before_replacement OceanAws#health_check_unhealthy_duration_before_replacement}.

---

##### `IamInstanceProfile`<sup>Optional</sup> <a name="IamInstanceProfile" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.iamInstanceProfile"></a>

```csharp
public string IamInstanceProfile { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#iam_instance_profile OceanAws#iam_instance_profile}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#id OceanAws#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceMetadataOptions`<sup>Optional</sup> <a name="InstanceMetadataOptions" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.instanceMetadataOptions"></a>

```csharp
public OceanAwsInstanceMetadataOptions InstanceMetadataOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptions">OceanAwsInstanceMetadataOptions</a>

instance_metadata_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#instance_metadata_options OceanAws#instance_metadata_options}

---

##### `KeyName`<sup>Optional</sup> <a name="KeyName" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.keyName"></a>

```csharp
public string KeyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#key_name OceanAws#key_name}.

---

##### `LoadBalancers`<sup>Optional</sup> <a name="LoadBalancers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.loadBalancers"></a>

```csharp
public object LoadBalancers { get; set; }
```

- *Type:* object

load_balancers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#load_balancers OceanAws#load_balancers}

---

##### `Logging`<sup>Optional</sup> <a name="Logging" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.logging"></a>

```csharp
public OceanAwsLogging Logging { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLogging">OceanAwsLogging</a>

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#logging OceanAws#logging}

---

##### `MaxSize`<sup>Optional</sup> <a name="MaxSize" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.maxSize"></a>

```csharp
public double MaxSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#max_size OceanAws#max_size}.

---

##### `MinSize`<sup>Optional</sup> <a name="MinSize" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.minSize"></a>

```csharp
public double MinSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#min_size OceanAws#min_size}.

---

##### `Monitoring`<sup>Optional</sup> <a name="Monitoring" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.monitoring"></a>

```csharp
public object Monitoring { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#monitoring OceanAws#monitoring}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#name OceanAws#name}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#region OceanAws#region}.

---

##### `ReservedEnis`<sup>Optional</sup> <a name="ReservedEnis" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.reservedEnis"></a>

```csharp
public double ReservedEnis { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#reserved_enis OceanAws#reserved_enis}.

---

##### `ResourceTagSpecification`<sup>Optional</sup> <a name="ResourceTagSpecification" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.resourceTagSpecification"></a>

```csharp
public object ResourceTagSpecification { get; set; }
```

- *Type:* object

resource_tag_specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#resource_tag_specification OceanAws#resource_tag_specification}

---

##### `RootVolumeSize`<sup>Optional</sup> <a name="RootVolumeSize" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.rootVolumeSize"></a>

```csharp
public double RootVolumeSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#root_volume_size OceanAws#root_volume_size}.

---

##### `ScheduledTask`<sup>Optional</sup> <a name="ScheduledTask" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.scheduledTask"></a>

```csharp
public OceanAwsScheduledTask ScheduledTask { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTask">OceanAwsScheduledTask</a>

scheduled_task block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#scheduled_task OceanAws#scheduled_task}

---

##### `SpotPercentage`<sup>Optional</sup> <a name="SpotPercentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.spotPercentage"></a>

```csharp
public double SpotPercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#spot_percentage OceanAws#spot_percentage}.

---

##### `SpreadNodesBy`<sup>Optional</sup> <a name="SpreadNodesBy" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.spreadNodesBy"></a>

```csharp
public string SpreadNodesBy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#spread_nodes_by OceanAws#spread_nodes_by}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.tags"></a>

```csharp
public object Tags { get; set; }
```

- *Type:* object

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#tags OceanAws#tags}

---

##### `UpdatePolicy`<sup>Optional</sup> <a name="UpdatePolicy" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.updatePolicy"></a>

```csharp
public OceanAwsUpdatePolicy UpdatePolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy">OceanAwsUpdatePolicy</a>

update_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#update_policy OceanAws#update_policy}

---

##### `UseAsTemplateOnly`<sup>Optional</sup> <a name="UseAsTemplateOnly" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.useAsTemplateOnly"></a>

```csharp
public object UseAsTemplateOnly { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#use_as_template_only OceanAws#use_as_template_only}.

---

##### `UserData`<sup>Optional</sup> <a name="UserData" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.userData"></a>

```csharp
public string UserData { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#user_data OceanAws#user_data}.

---

##### `UtilizeCommitments`<sup>Optional</sup> <a name="UtilizeCommitments" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.utilizeCommitments"></a>

```csharp
public object UtilizeCommitments { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#utilize_commitments OceanAws#utilize_commitments}.

---

##### `UtilizeReservedInstances`<sup>Optional</sup> <a name="UtilizeReservedInstances" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.utilizeReservedInstances"></a>

```csharp
public object UtilizeReservedInstances { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#utilize_reserved_instances OceanAws#utilize_reserved_instances}.

---

##### `Whitelist`<sup>Optional</sup> <a name="Whitelist" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.whitelist"></a>

```csharp
public string[] Whitelist { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#whitelist OceanAws#whitelist}.

---

### OceanAwsDetachLoadBalancer <a name="OceanAwsDetachLoadBalancer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsDetachLoadBalancer {
    string Type,
    string Arn = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancer.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#type OceanAws#type}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancer.property.arn">Arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#arn OceanAws#arn}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancer.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#name OceanAws#name}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancer.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#type OceanAws#type}.

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancer.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#arn OceanAws#arn}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancer.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#name OceanAws#name}.

---

### OceanAwsFilters <a name="OceanAwsFilters" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsFilters {
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
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.architectures">Architectures</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#architectures OceanAws#architectures}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.categories">Categories</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#categories OceanAws#categories}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.diskTypes">DiskTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#disk_types OceanAws#disk_types}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.excludeFamilies">ExcludeFamilies</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#exclude_families OceanAws#exclude_families}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.excludeMetal">ExcludeMetal</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#exclude_metal OceanAws#exclude_metal}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.hypervisor">Hypervisor</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#hypervisor OceanAws#hypervisor}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.includeFamilies">IncludeFamilies</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#include_families OceanAws#include_families}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.isEnaSupported">IsEnaSupported</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#is_ena_supported OceanAws#is_ena_supported}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.maxGpu">MaxGpu</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#max_gpu OceanAws#max_gpu}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.maxMemoryGib">MaxMemoryGib</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#max_memory_gib OceanAws#max_memory_gib}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.maxNetworkPerformance">MaxNetworkPerformance</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#max_network_performance OceanAws#max_network_performance}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.maxVcpu">MaxVcpu</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#max_vcpu OceanAws#max_vcpu}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.minEnis">MinEnis</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#min_enis OceanAws#min_enis}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.minGpu">MinGpu</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#min_gpu OceanAws#min_gpu}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.minMemoryGib">MinMemoryGib</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#min_memory_gib OceanAws#min_memory_gib}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.minNetworkPerformance">MinNetworkPerformance</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#min_network_performance OceanAws#min_network_performance}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.minVcpu">MinVcpu</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#min_vcpu OceanAws#min_vcpu}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.rootDeviceTypes">RootDeviceTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#root_device_types OceanAws#root_device_types}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.virtualizationTypes">VirtualizationTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#virtualization_types OceanAws#virtualization_types}. |

---

##### `Architectures`<sup>Optional</sup> <a name="Architectures" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.architectures"></a>

```csharp
public string[] Architectures { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#architectures OceanAws#architectures}.

---

##### `Categories`<sup>Optional</sup> <a name="Categories" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.categories"></a>

```csharp
public string[] Categories { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#categories OceanAws#categories}.

---

##### `DiskTypes`<sup>Optional</sup> <a name="DiskTypes" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.diskTypes"></a>

```csharp
public string[] DiskTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#disk_types OceanAws#disk_types}.

---

##### `ExcludeFamilies`<sup>Optional</sup> <a name="ExcludeFamilies" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.excludeFamilies"></a>

```csharp
public string[] ExcludeFamilies { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#exclude_families OceanAws#exclude_families}.

---

##### `ExcludeMetal`<sup>Optional</sup> <a name="ExcludeMetal" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.excludeMetal"></a>

```csharp
public object ExcludeMetal { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#exclude_metal OceanAws#exclude_metal}.

---

##### `Hypervisor`<sup>Optional</sup> <a name="Hypervisor" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.hypervisor"></a>

```csharp
public string[] Hypervisor { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#hypervisor OceanAws#hypervisor}.

---

##### `IncludeFamilies`<sup>Optional</sup> <a name="IncludeFamilies" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.includeFamilies"></a>

```csharp
public string[] IncludeFamilies { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#include_families OceanAws#include_families}.

---

##### `IsEnaSupported`<sup>Optional</sup> <a name="IsEnaSupported" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.isEnaSupported"></a>

```csharp
public string IsEnaSupported { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#is_ena_supported OceanAws#is_ena_supported}.

---

##### `MaxGpu`<sup>Optional</sup> <a name="MaxGpu" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.maxGpu"></a>

```csharp
public double MaxGpu { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#max_gpu OceanAws#max_gpu}.

---

##### `MaxMemoryGib`<sup>Optional</sup> <a name="MaxMemoryGib" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.maxMemoryGib"></a>

```csharp
public double MaxMemoryGib { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#max_memory_gib OceanAws#max_memory_gib}.

---

##### `MaxNetworkPerformance`<sup>Optional</sup> <a name="MaxNetworkPerformance" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.maxNetworkPerformance"></a>

```csharp
public double MaxNetworkPerformance { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#max_network_performance OceanAws#max_network_performance}.

---

##### `MaxVcpu`<sup>Optional</sup> <a name="MaxVcpu" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.maxVcpu"></a>

```csharp
public double MaxVcpu { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#max_vcpu OceanAws#max_vcpu}.

---

##### `MinEnis`<sup>Optional</sup> <a name="MinEnis" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.minEnis"></a>

```csharp
public double MinEnis { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#min_enis OceanAws#min_enis}.

---

##### `MinGpu`<sup>Optional</sup> <a name="MinGpu" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.minGpu"></a>

```csharp
public double MinGpu { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#min_gpu OceanAws#min_gpu}.

---

##### `MinMemoryGib`<sup>Optional</sup> <a name="MinMemoryGib" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.minMemoryGib"></a>

```csharp
public double MinMemoryGib { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#min_memory_gib OceanAws#min_memory_gib}.

---

##### `MinNetworkPerformance`<sup>Optional</sup> <a name="MinNetworkPerformance" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.minNetworkPerformance"></a>

```csharp
public double MinNetworkPerformance { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#min_network_performance OceanAws#min_network_performance}.

---

##### `MinVcpu`<sup>Optional</sup> <a name="MinVcpu" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.minVcpu"></a>

```csharp
public double MinVcpu { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#min_vcpu OceanAws#min_vcpu}.

---

##### `RootDeviceTypes`<sup>Optional</sup> <a name="RootDeviceTypes" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.rootDeviceTypes"></a>

```csharp
public string[] RootDeviceTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#root_device_types OceanAws#root_device_types}.

---

##### `VirtualizationTypes`<sup>Optional</sup> <a name="VirtualizationTypes" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.virtualizationTypes"></a>

```csharp
public string[] VirtualizationTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#virtualization_types OceanAws#virtualization_types}.

---

### OceanAwsInstanceMetadataOptions <a name="OceanAwsInstanceMetadataOptions" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsInstanceMetadataOptions {
    string HttpTokens,
    double HttpPutResponseHopLimit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptions.property.httpTokens">HttpTokens</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#http_tokens OceanAws#http_tokens}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptions.property.httpPutResponseHopLimit">HttpPutResponseHopLimit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#http_put_response_hop_limit OceanAws#http_put_response_hop_limit}. |

---

##### `HttpTokens`<sup>Required</sup> <a name="HttpTokens" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptions.property.httpTokens"></a>

```csharp
public string HttpTokens { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#http_tokens OceanAws#http_tokens}.

---

##### `HttpPutResponseHopLimit`<sup>Optional</sup> <a name="HttpPutResponseHopLimit" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptions.property.httpPutResponseHopLimit"></a>

```csharp
public double HttpPutResponseHopLimit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#http_put_response_hop_limit OceanAws#http_put_response_hop_limit}.

---

### OceanAwsLoadBalancers <a name="OceanAwsLoadBalancers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLoadBalancers {
    string Arn = null,
    string Name = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancers.property.arn">Arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#arn OceanAws#arn}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancers.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#name OceanAws#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancers.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#type OceanAws#type}. |

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancers.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#arn OceanAws#arn}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancers.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#name OceanAws#name}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancers.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#type OceanAws#type}.

---

### OceanAwsLogging <a name="OceanAwsLogging" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLogging.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLogging {
    OceanAwsLoggingExport Export = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLogging.property.export">Export</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExport">OceanAwsLoggingExport</a></code> | export block. |

---

##### `Export`<sup>Optional</sup> <a name="Export" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLogging.property.export"></a>

```csharp
public OceanAwsLoggingExport Export { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExport">OceanAwsLoggingExport</a>

export block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#export OceanAws#export}

---

### OceanAwsLoggingExport <a name="OceanAwsLoggingExport" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExport"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExport.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLoggingExport {
    object S3 = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExport.property.s3">S3</a></code> | <code>object</code> | s3 block. |

---

##### `S3`<sup>Optional</sup> <a name="S3" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExport.property.s3"></a>

```csharp
public object S3 { get; set; }
```

- *Type:* object

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#s3 OceanAws#s3}

---

### OceanAwsLoggingExportS3 <a name="OceanAwsLoggingExportS3" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLoggingExportS3 {
    string Id
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#id OceanAws#id}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#id OceanAws#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### OceanAwsResourceTagSpecification <a name="OceanAwsResourceTagSpecification" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecification.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsResourceTagSpecification {
    object ShouldTagVolumes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecification.property.shouldTagVolumes">ShouldTagVolumes</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#should_tag_volumes OceanAws#should_tag_volumes}. |

---

##### `ShouldTagVolumes`<sup>Optional</sup> <a name="ShouldTagVolumes" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecification.property.shouldTagVolumes"></a>

```csharp
public object ShouldTagVolumes { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#should_tag_volumes OceanAws#should_tag_volumes}.

---

### OceanAwsScheduledTask <a name="OceanAwsScheduledTask" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTask.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsScheduledTask {
    OceanAwsScheduledTaskShutdownHours ShutdownHours = null,
    object Tasks = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTask.property.shutdownHours">ShutdownHours</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHours">OceanAwsScheduledTaskShutdownHours</a></code> | shutdown_hours block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTask.property.tasks">Tasks</a></code> | <code>object</code> | tasks block. |

---

##### `ShutdownHours`<sup>Optional</sup> <a name="ShutdownHours" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTask.property.shutdownHours"></a>

```csharp
public OceanAwsScheduledTaskShutdownHours ShutdownHours { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHours">OceanAwsScheduledTaskShutdownHours</a>

shutdown_hours block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#shutdown_hours OceanAws#shutdown_hours}

---

##### `Tasks`<sup>Optional</sup> <a name="Tasks" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTask.property.tasks"></a>

```csharp
public object Tasks { get; set; }
```

- *Type:* object

tasks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#tasks OceanAws#tasks}

---

### OceanAwsScheduledTaskShutdownHours <a name="OceanAwsScheduledTaskShutdownHours" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHours"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHours.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsScheduledTaskShutdownHours {
    string[] TimeWindows,
    object IsEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHours.property.timeWindows">TimeWindows</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#time_windows OceanAws#time_windows}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHours.property.isEnabled">IsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#is_enabled OceanAws#is_enabled}. |

---

##### `TimeWindows`<sup>Required</sup> <a name="TimeWindows" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHours.property.timeWindows"></a>

```csharp
public string[] TimeWindows { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#time_windows OceanAws#time_windows}.

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHours.property.isEnabled"></a>

```csharp
public object IsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#is_enabled OceanAws#is_enabled}.

---

### OceanAwsScheduledTaskTasks <a name="OceanAwsScheduledTaskTasks" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsScheduledTaskTasks {
    string CronExpression,
    object IsEnabled,
    string TaskType,
    OceanAwsScheduledTaskTasksParameters Parameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasks.property.cronExpression">CronExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#cron_expression OceanAws#cron_expression}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasks.property.isEnabled">IsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#is_enabled OceanAws#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasks.property.taskType">TaskType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#task_type OceanAws#task_type}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasks.property.parameters">Parameters</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParameters">OceanAwsScheduledTaskTasksParameters</a></code> | parameters block. |

---

##### `CronExpression`<sup>Required</sup> <a name="CronExpression" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasks.property.cronExpression"></a>

```csharp
public string CronExpression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#cron_expression OceanAws#cron_expression}.

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasks.property.isEnabled"></a>

```csharp
public object IsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#is_enabled OceanAws#is_enabled}.

---

##### `TaskType`<sup>Required</sup> <a name="TaskType" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasks.property.taskType"></a>

```csharp
public string TaskType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#task_type OceanAws#task_type}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasks.property.parameters"></a>

```csharp
public OceanAwsScheduledTaskTasksParameters Parameters { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParameters">OceanAwsScheduledTaskTasksParameters</a>

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#parameters OceanAws#parameters}

---

### OceanAwsScheduledTaskTasksParameters <a name="OceanAwsScheduledTaskTasksParameters" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParameters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsScheduledTaskTasksParameters {
    OceanAwsScheduledTaskTasksParametersAmiAutoUpdate AmiAutoUpdate = null,
    OceanAwsScheduledTaskTasksParametersParametersClusterRoll ParametersClusterRoll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParameters.property.amiAutoUpdate">AmiAutoUpdate</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdate">OceanAwsScheduledTaskTasksParametersAmiAutoUpdate</a></code> | ami_auto_update block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParameters.property.parametersClusterRoll">ParametersClusterRoll</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRoll">OceanAwsScheduledTaskTasksParametersParametersClusterRoll</a></code> | parameters_cluster_roll block. |

---

##### `AmiAutoUpdate`<sup>Optional</sup> <a name="AmiAutoUpdate" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParameters.property.amiAutoUpdate"></a>

```csharp
public OceanAwsScheduledTaskTasksParametersAmiAutoUpdate AmiAutoUpdate { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdate">OceanAwsScheduledTaskTasksParametersAmiAutoUpdate</a>

ami_auto_update block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#ami_auto_update OceanAws#ami_auto_update}

---

##### `ParametersClusterRoll`<sup>Optional</sup> <a name="ParametersClusterRoll" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParameters.property.parametersClusterRoll"></a>

```csharp
public OceanAwsScheduledTaskTasksParametersParametersClusterRoll ParametersClusterRoll { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRoll">OceanAwsScheduledTaskTasksParametersParametersClusterRoll</a>

parameters_cluster_roll block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#parameters_cluster_roll OceanAws#parameters_cluster_roll}

---

### OceanAwsScheduledTaskTasksParametersAmiAutoUpdate <a name="OceanAwsScheduledTaskTasksParametersAmiAutoUpdate" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsScheduledTaskTasksParametersAmiAutoUpdate {
    OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRoll AmiAutoUpdateClusterRoll = null,
    object ApplyRoll = null,
    object MinorVersion = null,
    object Patch = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdate.property.amiAutoUpdateClusterRoll">AmiAutoUpdateClusterRoll</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRoll">OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRoll</a></code> | ami_auto_update_cluster_roll block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdate.property.applyRoll">ApplyRoll</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#apply_roll OceanAws#apply_roll}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdate.property.minorVersion">MinorVersion</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#minor_version OceanAws#minor_version}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdate.property.patch">Patch</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#patch OceanAws#patch}. |

---

##### `AmiAutoUpdateClusterRoll`<sup>Optional</sup> <a name="AmiAutoUpdateClusterRoll" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdate.property.amiAutoUpdateClusterRoll"></a>

```csharp
public OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRoll AmiAutoUpdateClusterRoll { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRoll">OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRoll</a>

ami_auto_update_cluster_roll block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#ami_auto_update_cluster_roll OceanAws#ami_auto_update_cluster_roll}

---

##### `ApplyRoll`<sup>Optional</sup> <a name="ApplyRoll" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdate.property.applyRoll"></a>

```csharp
public object ApplyRoll { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#apply_roll OceanAws#apply_roll}.

---

##### `MinorVersion`<sup>Optional</sup> <a name="MinorVersion" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdate.property.minorVersion"></a>

```csharp
public object MinorVersion { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#minor_version OceanAws#minor_version}.

---

##### `Patch`<sup>Optional</sup> <a name="Patch" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdate.property.patch"></a>

```csharp
public object Patch { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#patch OceanAws#patch}.

---

### OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRoll <a name="OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRoll" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRoll"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRoll.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRoll {
    double BatchMinHealthyPercentage = null,
    double BatchSizePercentage = null,
    string Comment = null,
    object RespectPdb = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRoll.property.batchMinHealthyPercentage">BatchMinHealthyPercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#batch_min_healthy_percentage OceanAws#batch_min_healthy_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRoll.property.batchSizePercentage">BatchSizePercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#batch_size_percentage OceanAws#batch_size_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRoll.property.comment">Comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#comment OceanAws#comment}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRoll.property.respectPdb">RespectPdb</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#respect_pdb OceanAws#respect_pdb}. |

---

##### `BatchMinHealthyPercentage`<sup>Optional</sup> <a name="BatchMinHealthyPercentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRoll.property.batchMinHealthyPercentage"></a>

```csharp
public double BatchMinHealthyPercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#batch_min_healthy_percentage OceanAws#batch_min_healthy_percentage}.

---

##### `BatchSizePercentage`<sup>Optional</sup> <a name="BatchSizePercentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRoll.property.batchSizePercentage"></a>

```csharp
public double BatchSizePercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#batch_size_percentage OceanAws#batch_size_percentage}.

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRoll.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#comment OceanAws#comment}.

---

##### `RespectPdb`<sup>Optional</sup> <a name="RespectPdb" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRoll.property.respectPdb"></a>

```csharp
public object RespectPdb { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#respect_pdb OceanAws#respect_pdb}.

---

### OceanAwsScheduledTaskTasksParametersParametersClusterRoll <a name="OceanAwsScheduledTaskTasksParametersParametersClusterRoll" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRoll"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRoll.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsScheduledTaskTasksParametersParametersClusterRoll {
    double BatchMinHealthyPercentage = null,
    double BatchSizePercentage = null,
    string Comment = null,
    object RespectPdb = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRoll.property.batchMinHealthyPercentage">BatchMinHealthyPercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#batch_min_healthy_percentage OceanAws#batch_min_healthy_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRoll.property.batchSizePercentage">BatchSizePercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#batch_size_percentage OceanAws#batch_size_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRoll.property.comment">Comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#comment OceanAws#comment}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRoll.property.respectPdb">RespectPdb</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#respect_pdb OceanAws#respect_pdb}. |

---

##### `BatchMinHealthyPercentage`<sup>Optional</sup> <a name="BatchMinHealthyPercentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRoll.property.batchMinHealthyPercentage"></a>

```csharp
public double BatchMinHealthyPercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#batch_min_healthy_percentage OceanAws#batch_min_healthy_percentage}.

---

##### `BatchSizePercentage`<sup>Optional</sup> <a name="BatchSizePercentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRoll.property.batchSizePercentage"></a>

```csharp
public double BatchSizePercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#batch_size_percentage OceanAws#batch_size_percentage}.

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRoll.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#comment OceanAws#comment}.

---

##### `RespectPdb`<sup>Optional</sup> <a name="RespectPdb" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRoll.property.respectPdb"></a>

```csharp
public object RespectPdb { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#respect_pdb OceanAws#respect_pdb}.

---

### OceanAwsTags <a name="OceanAwsTags" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsTags {
    string Key,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#key OceanAws#key}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#value OceanAws#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#key OceanAws#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#value OceanAws#value}.

---

### OceanAwsUpdatePolicy <a name="OceanAwsUpdatePolicy" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsUpdatePolicy {
    object ShouldRoll,
    object AutoApplyTags = null,
    object ConditionedRoll = null,
    string[] ConditionedRollParams = null,
    OceanAwsUpdatePolicyRollConfig RollConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy.property.shouldRoll">ShouldRoll</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#should_roll OceanAws#should_roll}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy.property.autoApplyTags">AutoApplyTags</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#auto_apply_tags OceanAws#auto_apply_tags}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy.property.conditionedRoll">ConditionedRoll</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#conditioned_roll OceanAws#conditioned_roll}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy.property.conditionedRollParams">ConditionedRollParams</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#conditioned_roll_params OceanAws#conditioned_roll_params}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy.property.rollConfig">RollConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig">OceanAwsUpdatePolicyRollConfig</a></code> | roll_config block. |

---

##### `ShouldRoll`<sup>Required</sup> <a name="ShouldRoll" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy.property.shouldRoll"></a>

```csharp
public object ShouldRoll { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#should_roll OceanAws#should_roll}.

---

##### `AutoApplyTags`<sup>Optional</sup> <a name="AutoApplyTags" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy.property.autoApplyTags"></a>

```csharp
public object AutoApplyTags { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#auto_apply_tags OceanAws#auto_apply_tags}.

---

##### `ConditionedRoll`<sup>Optional</sup> <a name="ConditionedRoll" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy.property.conditionedRoll"></a>

```csharp
public object ConditionedRoll { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#conditioned_roll OceanAws#conditioned_roll}.

---

##### `ConditionedRollParams`<sup>Optional</sup> <a name="ConditionedRollParams" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy.property.conditionedRollParams"></a>

```csharp
public string[] ConditionedRollParams { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#conditioned_roll_params OceanAws#conditioned_roll_params}.

---

##### `RollConfig`<sup>Optional</sup> <a name="RollConfig" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy.property.rollConfig"></a>

```csharp
public OceanAwsUpdatePolicyRollConfig RollConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig">OceanAwsUpdatePolicyRollConfig</a>

roll_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#roll_config OceanAws#roll_config}

---

### OceanAwsUpdatePolicyRollConfig <a name="OceanAwsUpdatePolicyRollConfig" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsUpdatePolicyRollConfig {
    double BatchSizePercentage,
    double BatchMinHealthyPercentage = null,
    string[] LaunchSpecIds = null,
    object RespectPdb = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig.property.batchSizePercentage">BatchSizePercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#batch_size_percentage OceanAws#batch_size_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig.property.batchMinHealthyPercentage">BatchMinHealthyPercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#batch_min_healthy_percentage OceanAws#batch_min_healthy_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig.property.launchSpecIds">LaunchSpecIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#launch_spec_ids OceanAws#launch_spec_ids}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig.property.respectPdb">RespectPdb</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#respect_pdb OceanAws#respect_pdb}. |

---

##### `BatchSizePercentage`<sup>Required</sup> <a name="BatchSizePercentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig.property.batchSizePercentage"></a>

```csharp
public double BatchSizePercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#batch_size_percentage OceanAws#batch_size_percentage}.

---

##### `BatchMinHealthyPercentage`<sup>Optional</sup> <a name="BatchMinHealthyPercentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig.property.batchMinHealthyPercentage"></a>

```csharp
public double BatchMinHealthyPercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#batch_min_healthy_percentage OceanAws#batch_min_healthy_percentage}.

---

##### `LaunchSpecIds`<sup>Optional</sup> <a name="LaunchSpecIds" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig.property.launchSpecIds"></a>

```csharp
public string[] LaunchSpecIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#launch_spec_ids OceanAws#launch_spec_ids}.

---

##### `RespectPdb`<sup>Optional</sup> <a name="RespectPdb" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig.property.respectPdb"></a>

```csharp
public object RespectPdb { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/ocean_aws#respect_pdb OceanAws#respect_pdb}.

---

## Classes <a name="Classes" id="Classes"></a>

### OceanAwsAttachLoadBalancerList <a name="OceanAwsAttachLoadBalancerList" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsAttachLoadBalancerList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerList.get"></a>

```csharp
private OceanAwsAttachLoadBalancerOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAwsAttachLoadBalancerOutputReference <a name="OceanAwsAttachLoadBalancerOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsAttachLoadBalancerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.resetArn">ResetArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArn` <a name="ResetArn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.resetArn"></a>

```csharp
private void ResetArn()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAttachLoadBalancerOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAwsAutoscalerAutoscaleDownOutputReference <a name="OceanAwsAutoscalerAutoscaleDownOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsAutoscalerAutoscaleDownOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.resetEvaluationPeriods">ResetEvaluationPeriods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.resetIsAggressiveScaleDownEnabled">ResetIsAggressiveScaleDownEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.resetMaxScaleDownPercentage">ResetMaxScaleDownPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEvaluationPeriods` <a name="ResetEvaluationPeriods" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.resetEvaluationPeriods"></a>

```csharp
private void ResetEvaluationPeriods()
```

##### `ResetIsAggressiveScaleDownEnabled` <a name="ResetIsAggressiveScaleDownEnabled" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.resetIsAggressiveScaleDownEnabled"></a>

```csharp
private void ResetIsAggressiveScaleDownEnabled()
```

##### `ResetMaxScaleDownPercentage` <a name="ResetMaxScaleDownPercentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.resetMaxScaleDownPercentage"></a>

```csharp
private void ResetMaxScaleDownPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.property.evaluationPeriodsInput">EvaluationPeriodsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.property.isAggressiveScaleDownEnabledInput">IsAggressiveScaleDownEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.property.maxScaleDownPercentageInput">MaxScaleDownPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.property.evaluationPeriods">EvaluationPeriods</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.property.isAggressiveScaleDownEnabled">IsAggressiveScaleDownEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.property.maxScaleDownPercentage">MaxScaleDownPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDown">OceanAwsAutoscalerAutoscaleDown</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EvaluationPeriodsInput`<sup>Optional</sup> <a name="EvaluationPeriodsInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.property.evaluationPeriodsInput"></a>

```csharp
public double EvaluationPeriodsInput { get; }
```

- *Type:* double

---

##### `IsAggressiveScaleDownEnabledInput`<sup>Optional</sup> <a name="IsAggressiveScaleDownEnabledInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.property.isAggressiveScaleDownEnabledInput"></a>

```csharp
public object IsAggressiveScaleDownEnabledInput { get; }
```

- *Type:* object

---

##### `MaxScaleDownPercentageInput`<sup>Optional</sup> <a name="MaxScaleDownPercentageInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.property.maxScaleDownPercentageInput"></a>

```csharp
public double MaxScaleDownPercentageInput { get; }
```

- *Type:* double

---

##### `EvaluationPeriods`<sup>Required</sup> <a name="EvaluationPeriods" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.property.evaluationPeriods"></a>

```csharp
public double EvaluationPeriods { get; }
```

- *Type:* double

---

##### `IsAggressiveScaleDownEnabled`<sup>Required</sup> <a name="IsAggressiveScaleDownEnabled" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.property.isAggressiveScaleDownEnabled"></a>

```csharp
public object IsAggressiveScaleDownEnabled { get; }
```

- *Type:* object

---

##### `MaxScaleDownPercentage`<sup>Required</sup> <a name="MaxScaleDownPercentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.property.maxScaleDownPercentage"></a>

```csharp
public double MaxScaleDownPercentage { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.property.internalValue"></a>

```csharp
public OceanAwsAutoscalerAutoscaleDown InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDown">OceanAwsAutoscalerAutoscaleDown</a>

---


### OceanAwsAutoscalerAutoscaleHeadroomOutputReference <a name="OceanAwsAutoscalerAutoscaleHeadroomOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsAutoscalerAutoscaleHeadroomOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.resetCpuPerUnit">ResetCpuPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.resetGpuPerUnit">ResetGpuPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.resetMemoryPerUnit">ResetMemoryPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.resetNumOfUnits">ResetNumOfUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpuPerUnit` <a name="ResetCpuPerUnit" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.resetCpuPerUnit"></a>

```csharp
private void ResetCpuPerUnit()
```

##### `ResetGpuPerUnit` <a name="ResetGpuPerUnit" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.resetGpuPerUnit"></a>

```csharp
private void ResetGpuPerUnit()
```

##### `ResetMemoryPerUnit` <a name="ResetMemoryPerUnit" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.resetMemoryPerUnit"></a>

```csharp
private void ResetMemoryPerUnit()
```

##### `ResetNumOfUnits` <a name="ResetNumOfUnits" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.resetNumOfUnits"></a>

```csharp
private void ResetNumOfUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.cpuPerUnitInput">CpuPerUnitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.gpuPerUnitInput">GpuPerUnitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.memoryPerUnitInput">MemoryPerUnitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.numOfUnitsInput">NumOfUnitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.cpuPerUnit">CpuPerUnit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.gpuPerUnit">GpuPerUnit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.memoryPerUnit">MemoryPerUnit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.numOfUnits">NumOfUnits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom">OceanAwsAutoscalerAutoscaleHeadroom</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CpuPerUnitInput`<sup>Optional</sup> <a name="CpuPerUnitInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.cpuPerUnitInput"></a>

```csharp
public double CpuPerUnitInput { get; }
```

- *Type:* double

---

##### `GpuPerUnitInput`<sup>Optional</sup> <a name="GpuPerUnitInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.gpuPerUnitInput"></a>

```csharp
public double GpuPerUnitInput { get; }
```

- *Type:* double

---

##### `MemoryPerUnitInput`<sup>Optional</sup> <a name="MemoryPerUnitInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.memoryPerUnitInput"></a>

```csharp
public double MemoryPerUnitInput { get; }
```

- *Type:* double

---

##### `NumOfUnitsInput`<sup>Optional</sup> <a name="NumOfUnitsInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.numOfUnitsInput"></a>

```csharp
public double NumOfUnitsInput { get; }
```

- *Type:* double

---

##### `CpuPerUnit`<sup>Required</sup> <a name="CpuPerUnit" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.cpuPerUnit"></a>

```csharp
public double CpuPerUnit { get; }
```

- *Type:* double

---

##### `GpuPerUnit`<sup>Required</sup> <a name="GpuPerUnit" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.gpuPerUnit"></a>

```csharp
public double GpuPerUnit { get; }
```

- *Type:* double

---

##### `MemoryPerUnit`<sup>Required</sup> <a name="MemoryPerUnit" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.memoryPerUnit"></a>

```csharp
public double MemoryPerUnit { get; }
```

- *Type:* double

---

##### `NumOfUnits`<sup>Required</sup> <a name="NumOfUnits" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.numOfUnits"></a>

```csharp
public double NumOfUnits { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.internalValue"></a>

```csharp
public OceanAwsAutoscalerAutoscaleHeadroom InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom">OceanAwsAutoscalerAutoscaleHeadroom</a>

---


### OceanAwsAutoscalerOutputReference <a name="OceanAwsAutoscalerOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsAutoscalerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.putAutoscaleDown">PutAutoscaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.putAutoscaleHeadroom">PutAutoscaleHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.putResourceLimits">PutResourceLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetAutoHeadroomPercentage">ResetAutoHeadroomPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetAutoscaleCooldown">ResetAutoscaleCooldown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetAutoscaleDown">ResetAutoscaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetAutoscaleHeadroom">ResetAutoscaleHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetAutoscaleIsAutoConfig">ResetAutoscaleIsAutoConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetAutoscaleIsEnabled">ResetAutoscaleIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetEnableAutomaticAndManualHeadroom">ResetEnableAutomaticAndManualHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetExtendedResourceDefinitions">ResetExtendedResourceDefinitions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetResourceLimits">ResetResourceLimits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutoscaleDown` <a name="PutAutoscaleDown" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.putAutoscaleDown"></a>

```csharp
private void PutAutoscaleDown(OceanAwsAutoscalerAutoscaleDown Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.putAutoscaleDown.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDown">OceanAwsAutoscalerAutoscaleDown</a>

---

##### `PutAutoscaleHeadroom` <a name="PutAutoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.putAutoscaleHeadroom"></a>

```csharp
private void PutAutoscaleHeadroom(OceanAwsAutoscalerAutoscaleHeadroom Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.putAutoscaleHeadroom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom">OceanAwsAutoscalerAutoscaleHeadroom</a>

---

##### `PutResourceLimits` <a name="PutResourceLimits" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.putResourceLimits"></a>

```csharp
private void PutResourceLimits(OceanAwsAutoscalerResourceLimits Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.putResourceLimits.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimits">OceanAwsAutoscalerResourceLimits</a>

---

##### `ResetAutoHeadroomPercentage` <a name="ResetAutoHeadroomPercentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetAutoHeadroomPercentage"></a>

```csharp
private void ResetAutoHeadroomPercentage()
```

##### `ResetAutoscaleCooldown` <a name="ResetAutoscaleCooldown" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetAutoscaleCooldown"></a>

```csharp
private void ResetAutoscaleCooldown()
```

##### `ResetAutoscaleDown` <a name="ResetAutoscaleDown" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetAutoscaleDown"></a>

```csharp
private void ResetAutoscaleDown()
```

##### `ResetAutoscaleHeadroom` <a name="ResetAutoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetAutoscaleHeadroom"></a>

```csharp
private void ResetAutoscaleHeadroom()
```

##### `ResetAutoscaleIsAutoConfig` <a name="ResetAutoscaleIsAutoConfig" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetAutoscaleIsAutoConfig"></a>

```csharp
private void ResetAutoscaleIsAutoConfig()
```

##### `ResetAutoscaleIsEnabled` <a name="ResetAutoscaleIsEnabled" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetAutoscaleIsEnabled"></a>

```csharp
private void ResetAutoscaleIsEnabled()
```

##### `ResetEnableAutomaticAndManualHeadroom` <a name="ResetEnableAutomaticAndManualHeadroom" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetEnableAutomaticAndManualHeadroom"></a>

```csharp
private void ResetEnableAutomaticAndManualHeadroom()
```

##### `ResetExtendedResourceDefinitions` <a name="ResetExtendedResourceDefinitions" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetExtendedResourceDefinitions"></a>

```csharp
private void ResetExtendedResourceDefinitions()
```

##### `ResetResourceLimits` <a name="ResetResourceLimits" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetResourceLimits"></a>

```csharp
private void ResetResourceLimits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleDown">AutoscaleDown</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference">OceanAwsAutoscalerAutoscaleDownOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleHeadroom">AutoscaleHeadroom</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference">OceanAwsAutoscalerAutoscaleHeadroomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.resourceLimits">ResourceLimits</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference">OceanAwsAutoscalerResourceLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoHeadroomPercentageInput">AutoHeadroomPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleCooldownInput">AutoscaleCooldownInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleDownInput">AutoscaleDownInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDown">OceanAwsAutoscalerAutoscaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleHeadroomInput">AutoscaleHeadroomInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom">OceanAwsAutoscalerAutoscaleHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleIsAutoConfigInput">AutoscaleIsAutoConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleIsEnabledInput">AutoscaleIsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.enableAutomaticAndManualHeadroomInput">EnableAutomaticAndManualHeadroomInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.extendedResourceDefinitionsInput">ExtendedResourceDefinitionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.resourceLimitsInput">ResourceLimitsInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimits">OceanAwsAutoscalerResourceLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoHeadroomPercentage">AutoHeadroomPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleCooldown">AutoscaleCooldown</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleIsAutoConfig">AutoscaleIsAutoConfig</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleIsEnabled">AutoscaleIsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.enableAutomaticAndManualHeadroom">EnableAutomaticAndManualHeadroom</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.extendedResourceDefinitions">ExtendedResourceDefinitions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler">OceanAwsAutoscaler</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoscaleDown`<sup>Required</sup> <a name="AutoscaleDown" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleDown"></a>

```csharp
public OceanAwsAutoscalerAutoscaleDownOutputReference AutoscaleDown { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference">OceanAwsAutoscalerAutoscaleDownOutputReference</a>

---

##### `AutoscaleHeadroom`<sup>Required</sup> <a name="AutoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleHeadroom"></a>

```csharp
public OceanAwsAutoscalerAutoscaleHeadroomOutputReference AutoscaleHeadroom { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference">OceanAwsAutoscalerAutoscaleHeadroomOutputReference</a>

---

##### `ResourceLimits`<sup>Required</sup> <a name="ResourceLimits" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.resourceLimits"></a>

```csharp
public OceanAwsAutoscalerResourceLimitsOutputReference ResourceLimits { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference">OceanAwsAutoscalerResourceLimitsOutputReference</a>

---

##### `AutoHeadroomPercentageInput`<sup>Optional</sup> <a name="AutoHeadroomPercentageInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoHeadroomPercentageInput"></a>

```csharp
public double AutoHeadroomPercentageInput { get; }
```

- *Type:* double

---

##### `AutoscaleCooldownInput`<sup>Optional</sup> <a name="AutoscaleCooldownInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleCooldownInput"></a>

```csharp
public double AutoscaleCooldownInput { get; }
```

- *Type:* double

---

##### `AutoscaleDownInput`<sup>Optional</sup> <a name="AutoscaleDownInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleDownInput"></a>

```csharp
public OceanAwsAutoscalerAutoscaleDown AutoscaleDownInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDown">OceanAwsAutoscalerAutoscaleDown</a>

---

##### `AutoscaleHeadroomInput`<sup>Optional</sup> <a name="AutoscaleHeadroomInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleHeadroomInput"></a>

```csharp
public OceanAwsAutoscalerAutoscaleHeadroom AutoscaleHeadroomInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom">OceanAwsAutoscalerAutoscaleHeadroom</a>

---

##### `AutoscaleIsAutoConfigInput`<sup>Optional</sup> <a name="AutoscaleIsAutoConfigInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleIsAutoConfigInput"></a>

```csharp
public object AutoscaleIsAutoConfigInput { get; }
```

- *Type:* object

---

##### `AutoscaleIsEnabledInput`<sup>Optional</sup> <a name="AutoscaleIsEnabledInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleIsEnabledInput"></a>

```csharp
public object AutoscaleIsEnabledInput { get; }
```

- *Type:* object

---

##### `EnableAutomaticAndManualHeadroomInput`<sup>Optional</sup> <a name="EnableAutomaticAndManualHeadroomInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.enableAutomaticAndManualHeadroomInput"></a>

```csharp
public object EnableAutomaticAndManualHeadroomInput { get; }
```

- *Type:* object

---

##### `ExtendedResourceDefinitionsInput`<sup>Optional</sup> <a name="ExtendedResourceDefinitionsInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.extendedResourceDefinitionsInput"></a>

```csharp
public string[] ExtendedResourceDefinitionsInput { get; }
```

- *Type:* string[]

---

##### `ResourceLimitsInput`<sup>Optional</sup> <a name="ResourceLimitsInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.resourceLimitsInput"></a>

```csharp
public OceanAwsAutoscalerResourceLimits ResourceLimitsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimits">OceanAwsAutoscalerResourceLimits</a>

---

##### `AutoHeadroomPercentage`<sup>Required</sup> <a name="AutoHeadroomPercentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoHeadroomPercentage"></a>

```csharp
public double AutoHeadroomPercentage { get; }
```

- *Type:* double

---

##### `AutoscaleCooldown`<sup>Required</sup> <a name="AutoscaleCooldown" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleCooldown"></a>

```csharp
public double AutoscaleCooldown { get; }
```

- *Type:* double

---

##### `AutoscaleIsAutoConfig`<sup>Required</sup> <a name="AutoscaleIsAutoConfig" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleIsAutoConfig"></a>

```csharp
public object AutoscaleIsAutoConfig { get; }
```

- *Type:* object

---

##### `AutoscaleIsEnabled`<sup>Required</sup> <a name="AutoscaleIsEnabled" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleIsEnabled"></a>

```csharp
public object AutoscaleIsEnabled { get; }
```

- *Type:* object

---

##### `EnableAutomaticAndManualHeadroom`<sup>Required</sup> <a name="EnableAutomaticAndManualHeadroom" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.enableAutomaticAndManualHeadroom"></a>

```csharp
public object EnableAutomaticAndManualHeadroom { get; }
```

- *Type:* object

---

##### `ExtendedResourceDefinitions`<sup>Required</sup> <a name="ExtendedResourceDefinitions" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.extendedResourceDefinitions"></a>

```csharp
public string[] ExtendedResourceDefinitions { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.internalValue"></a>

```csharp
public OceanAwsAutoscaler InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler">OceanAwsAutoscaler</a>

---


### OceanAwsAutoscalerResourceLimitsOutputReference <a name="OceanAwsAutoscalerResourceLimitsOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsAutoscalerResourceLimitsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.resetMaxMemoryGib">ResetMaxMemoryGib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.resetMaxVcpu">ResetMaxVcpu</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxMemoryGib` <a name="ResetMaxMemoryGib" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.resetMaxMemoryGib"></a>

```csharp
private void ResetMaxMemoryGib()
```

##### `ResetMaxVcpu` <a name="ResetMaxVcpu" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.resetMaxVcpu"></a>

```csharp
private void ResetMaxVcpu()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.property.maxMemoryGibInput">MaxMemoryGibInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.property.maxVcpuInput">MaxVcpuInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.property.maxMemoryGib">MaxMemoryGib</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.property.maxVcpu">MaxVcpu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimits">OceanAwsAutoscalerResourceLimits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxMemoryGibInput`<sup>Optional</sup> <a name="MaxMemoryGibInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.property.maxMemoryGibInput"></a>

```csharp
public double MaxMemoryGibInput { get; }
```

- *Type:* double

---

##### `MaxVcpuInput`<sup>Optional</sup> <a name="MaxVcpuInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.property.maxVcpuInput"></a>

```csharp
public double MaxVcpuInput { get; }
```

- *Type:* double

---

##### `MaxMemoryGib`<sup>Required</sup> <a name="MaxMemoryGib" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.property.maxMemoryGib"></a>

```csharp
public double MaxMemoryGib { get; }
```

- *Type:* double

---

##### `MaxVcpu`<sup>Required</sup> <a name="MaxVcpu" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.property.maxVcpu"></a>

```csharp
public double MaxVcpu { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.property.internalValue"></a>

```csharp
public OceanAwsAutoscalerResourceLimits InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimits">OceanAwsAutoscalerResourceLimits</a>

---


### OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference <a name="OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference.property.baseSizeInput">BaseSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference.property.resourceInput">ResourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference.property.sizePerResourceUnitInput">SizePerResourceUnitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference.property.baseSize">BaseSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference.property.resource">Resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference.property.sizePerResourceUnit">SizePerResourceUnit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIops">OceanAwsBlockDeviceMappingsEbsDynamicIops</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BaseSizeInput`<sup>Optional</sup> <a name="BaseSizeInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference.property.baseSizeInput"></a>

```csharp
public double BaseSizeInput { get; }
```

- *Type:* double

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference.property.resourceInput"></a>

```csharp
public string ResourceInput { get; }
```

- *Type:* string

---

##### `SizePerResourceUnitInput`<sup>Optional</sup> <a name="SizePerResourceUnitInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference.property.sizePerResourceUnitInput"></a>

```csharp
public double SizePerResourceUnitInput { get; }
```

- *Type:* double

---

##### `BaseSize`<sup>Required</sup> <a name="BaseSize" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference.property.baseSize"></a>

```csharp
public double BaseSize { get; }
```

- *Type:* double

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference.property.resource"></a>

```csharp
public string Resource { get; }
```

- *Type:* string

---

##### `SizePerResourceUnit`<sup>Required</sup> <a name="SizePerResourceUnit" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference.property.sizePerResourceUnit"></a>

```csharp
public double SizePerResourceUnit { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference.property.internalValue"></a>

```csharp
public OceanAwsBlockDeviceMappingsEbsDynamicIops InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIops">OceanAwsBlockDeviceMappingsEbsDynamicIops</a>

---


### OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference <a name="OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.baseSizeInput">BaseSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.resourceInput">ResourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.sizePerResourceUnitInput">SizePerResourceUnitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.baseSize">BaseSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.resource">Resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.sizePerResourceUnit">SizePerResourceUnit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize">OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BaseSizeInput`<sup>Optional</sup> <a name="BaseSizeInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.baseSizeInput"></a>

```csharp
public double BaseSizeInput { get; }
```

- *Type:* double

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.resourceInput"></a>

```csharp
public string ResourceInput { get; }
```

- *Type:* string

---

##### `SizePerResourceUnitInput`<sup>Optional</sup> <a name="SizePerResourceUnitInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.sizePerResourceUnitInput"></a>

```csharp
public double SizePerResourceUnitInput { get; }
```

- *Type:* double

---

##### `BaseSize`<sup>Required</sup> <a name="BaseSize" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.baseSize"></a>

```csharp
public double BaseSize { get; }
```

- *Type:* double

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.resource"></a>

```csharp
public string Resource { get; }
```

- *Type:* string

---

##### `SizePerResourceUnit`<sup>Required</sup> <a name="SizePerResourceUnit" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.sizePerResourceUnit"></a>

```csharp
public double SizePerResourceUnit { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.internalValue"></a>

```csharp
public OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize">OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize</a>

---


### OceanAwsBlockDeviceMappingsEbsOutputReference <a name="OceanAwsBlockDeviceMappingsEbsOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsBlockDeviceMappingsEbsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.putDynamicIops">PutDynamicIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.putDynamicVolumeSize">PutDynamicVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resetDeleteOnTermination">ResetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resetDynamicIops">ResetDynamicIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resetDynamicVolumeSize">ResetDynamicVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resetEncrypted">ResetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resetSnapshotId">ResetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resetThroughput">ResetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resetVolumeSize">ResetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resetVolumeType">ResetVolumeType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDynamicIops` <a name="PutDynamicIops" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.putDynamicIops"></a>

```csharp
private void PutDynamicIops(OceanAwsBlockDeviceMappingsEbsDynamicIops Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.putDynamicIops.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIops">OceanAwsBlockDeviceMappingsEbsDynamicIops</a>

---

##### `PutDynamicVolumeSize` <a name="PutDynamicVolumeSize" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.putDynamicVolumeSize"></a>

```csharp
private void PutDynamicVolumeSize(OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.putDynamicVolumeSize.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize">OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize</a>

---

##### `ResetDeleteOnTermination` <a name="ResetDeleteOnTermination" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resetDeleteOnTermination"></a>

```csharp
private void ResetDeleteOnTermination()
```

##### `ResetDynamicIops` <a name="ResetDynamicIops" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resetDynamicIops"></a>

```csharp
private void ResetDynamicIops()
```

##### `ResetDynamicVolumeSize` <a name="ResetDynamicVolumeSize" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resetDynamicVolumeSize"></a>

```csharp
private void ResetDynamicVolumeSize()
```

##### `ResetEncrypted` <a name="ResetEncrypted" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resetEncrypted"></a>

```csharp
private void ResetEncrypted()
```

##### `ResetIops` <a name="ResetIops" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resetIops"></a>

```csharp
private void ResetIops()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetSnapshotId` <a name="ResetSnapshotId" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resetSnapshotId"></a>

```csharp
private void ResetSnapshotId()
```

##### `ResetThroughput` <a name="ResetThroughput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resetThroughput"></a>

```csharp
private void ResetThroughput()
```

##### `ResetVolumeSize` <a name="ResetVolumeSize" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resetVolumeSize"></a>

```csharp
private void ResetVolumeSize()
```

##### `ResetVolumeType` <a name="ResetVolumeType" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resetVolumeType"></a>

```csharp
private void ResetVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.dynamicIops">DynamicIops</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference">OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.dynamicVolumeSize">DynamicVolumeSize</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference">OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.deleteOnTerminationInput">DeleteOnTerminationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.dynamicIopsInput">DynamicIopsInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIops">OceanAwsBlockDeviceMappingsEbsDynamicIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.dynamicVolumeSizeInput">DynamicVolumeSizeInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize">OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.encryptedInput">EncryptedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.iopsInput">IopsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.snapshotIdInput">SnapshotIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.throughputInput">ThroughputInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput">VolumeSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput">VolumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.encrypted">Encrypted</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.iops">Iops</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.snapshotId">SnapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.throughput">Throughput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.volumeSize">VolumeSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.volumeType">VolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs">OceanAwsBlockDeviceMappingsEbs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DynamicIops`<sup>Required</sup> <a name="DynamicIops" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.dynamicIops"></a>

```csharp
public OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference DynamicIops { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference">OceanAwsBlockDeviceMappingsEbsDynamicIopsOutputReference</a>

---

##### `DynamicVolumeSize`<sup>Required</sup> <a name="DynamicVolumeSize" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.dynamicVolumeSize"></a>

```csharp
public OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference DynamicVolumeSize { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference">OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference</a>

---

##### `DeleteOnTerminationInput`<sup>Optional</sup> <a name="DeleteOnTerminationInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.deleteOnTerminationInput"></a>

```csharp
public object DeleteOnTerminationInput { get; }
```

- *Type:* object

---

##### `DynamicIopsInput`<sup>Optional</sup> <a name="DynamicIopsInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.dynamicIopsInput"></a>

```csharp
public OceanAwsBlockDeviceMappingsEbsDynamicIops DynamicIopsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicIops">OceanAwsBlockDeviceMappingsEbsDynamicIops</a>

---

##### `DynamicVolumeSizeInput`<sup>Optional</sup> <a name="DynamicVolumeSizeInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.dynamicVolumeSizeInput"></a>

```csharp
public OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize DynamicVolumeSizeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize">OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize</a>

---

##### `EncryptedInput`<sup>Optional</sup> <a name="EncryptedInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.encryptedInput"></a>

```csharp
public object EncryptedInput { get; }
```

- *Type:* object

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.iopsInput"></a>

```csharp
public double IopsInput { get; }
```

- *Type:* double

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `SnapshotIdInput`<sup>Optional</sup> <a name="SnapshotIdInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.snapshotIdInput"></a>

```csharp
public string SnapshotIdInput { get; }
```

- *Type:* string

---

##### `ThroughputInput`<sup>Optional</sup> <a name="ThroughputInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.throughputInput"></a>

```csharp
public double ThroughputInput { get; }
```

- *Type:* double

---

##### `VolumeSizeInput`<sup>Optional</sup> <a name="VolumeSizeInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput"></a>

```csharp
public double VolumeSizeInput { get; }
```

- *Type:* double

---

##### `VolumeTypeInput`<sup>Optional</sup> <a name="VolumeTypeInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput"></a>

```csharp
public string VolumeTypeInput { get; }
```

- *Type:* string

---

##### `DeleteOnTermination`<sup>Required</sup> <a name="DeleteOnTermination" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination"></a>

```csharp
public object DeleteOnTermination { get; }
```

- *Type:* object

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.encrypted"></a>

```csharp
public object Encrypted { get; }
```

- *Type:* object

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.iops"></a>

```csharp
public double Iops { get; }
```

- *Type:* double

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `SnapshotId`<sup>Required</sup> <a name="SnapshotId" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.snapshotId"></a>

```csharp
public string SnapshotId { get; }
```

- *Type:* string

---

##### `Throughput`<sup>Required</sup> <a name="Throughput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.throughput"></a>

```csharp
public double Throughput { get; }
```

- *Type:* double

---

##### `VolumeSize`<sup>Required</sup> <a name="VolumeSize" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.volumeSize"></a>

```csharp
public double VolumeSize { get; }
```

- *Type:* double

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.volumeType"></a>

```csharp
public string VolumeType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.internalValue"></a>

```csharp
public OceanAwsBlockDeviceMappingsEbs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs">OceanAwsBlockDeviceMappingsEbs</a>

---


### OceanAwsBlockDeviceMappingsList <a name="OceanAwsBlockDeviceMappingsList" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsBlockDeviceMappingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.get"></a>

```csharp
private OceanAwsBlockDeviceMappingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAwsBlockDeviceMappingsOutputReference <a name="OceanAwsBlockDeviceMappingsOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsBlockDeviceMappingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.putEbs">PutEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.resetDeviceName">ResetDeviceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.resetEbs">ResetEbs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEbs` <a name="PutEbs" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.putEbs"></a>

```csharp
private void PutEbs(OceanAwsBlockDeviceMappingsEbs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.putEbs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs">OceanAwsBlockDeviceMappingsEbs</a>

---

##### `ResetDeviceName` <a name="ResetDeviceName" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.resetDeviceName"></a>

```csharp
private void ResetDeviceName()
```

##### `ResetEbs` <a name="ResetEbs" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.resetEbs"></a>

```csharp
private void ResetEbs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.property.ebs">Ebs</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference">OceanAwsBlockDeviceMappingsEbsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.property.deviceNameInput">DeviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.property.ebsInput">EbsInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs">OceanAwsBlockDeviceMappingsEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.property.deviceName">DeviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ebs`<sup>Required</sup> <a name="Ebs" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.property.ebs"></a>

```csharp
public OceanAwsBlockDeviceMappingsEbsOutputReference Ebs { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference">OceanAwsBlockDeviceMappingsEbsOutputReference</a>

---

##### `DeviceNameInput`<sup>Optional</sup> <a name="DeviceNameInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.property.deviceNameInput"></a>

```csharp
public string DeviceNameInput { get; }
```

- *Type:* string

---

##### `EbsInput`<sup>Optional</sup> <a name="EbsInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.property.ebsInput"></a>

```csharp
public OceanAwsBlockDeviceMappingsEbs EbsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs">OceanAwsBlockDeviceMappingsEbs</a>

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.property.deviceName"></a>

```csharp
public string DeviceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAwsClusterOrientationList <a name="OceanAwsClusterOrientationList" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsClusterOrientationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.get"></a>

```csharp
private OceanAwsClusterOrientationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAwsClusterOrientationOutputReference <a name="OceanAwsClusterOrientationOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsClusterOrientationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.resetAvailabilityVsCost">ResetAvailabilityVsCost</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailabilityVsCost` <a name="ResetAvailabilityVsCost" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.resetAvailabilityVsCost"></a>

```csharp
private void ResetAvailabilityVsCost()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.property.availabilityVsCostInput">AvailabilityVsCostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.property.availabilityVsCost">AvailabilityVsCost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityVsCostInput`<sup>Optional</sup> <a name="AvailabilityVsCostInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.property.availabilityVsCostInput"></a>

```csharp
public string AvailabilityVsCostInput { get; }
```

- *Type:* string

---

##### `AvailabilityVsCost`<sup>Required</sup> <a name="AvailabilityVsCost" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.property.availabilityVsCost"></a>

```csharp
public string AvailabilityVsCost { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAwsDetachLoadBalancerList <a name="OceanAwsDetachLoadBalancerList" id="@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsDetachLoadBalancerList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerList.get"></a>

```csharp
private OceanAwsDetachLoadBalancerOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAwsDetachLoadBalancerOutputReference <a name="OceanAwsDetachLoadBalancerOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsDetachLoadBalancerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.resetArn">ResetArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArn` <a name="ResetArn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.resetArn"></a>

```csharp
private void ResetArn()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsDetachLoadBalancerOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAwsFiltersOutputReference <a name="OceanAwsFiltersOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetArchitectures">ResetArchitectures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetCategories">ResetCategories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetDiskTypes">ResetDiskTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetExcludeFamilies">ResetExcludeFamilies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetExcludeMetal">ResetExcludeMetal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetHypervisor">ResetHypervisor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetIncludeFamilies">ResetIncludeFamilies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetIsEnaSupported">ResetIsEnaSupported</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMaxGpu">ResetMaxGpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMaxMemoryGib">ResetMaxMemoryGib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMaxNetworkPerformance">ResetMaxNetworkPerformance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMaxVcpu">ResetMaxVcpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMinEnis">ResetMinEnis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMinGpu">ResetMinGpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMinMemoryGib">ResetMinMemoryGib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMinNetworkPerformance">ResetMinNetworkPerformance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMinVcpu">ResetMinVcpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetRootDeviceTypes">ResetRootDeviceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetVirtualizationTypes">ResetVirtualizationTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArchitectures` <a name="ResetArchitectures" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetArchitectures"></a>

```csharp
private void ResetArchitectures()
```

##### `ResetCategories` <a name="ResetCategories" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetCategories"></a>

```csharp
private void ResetCategories()
```

##### `ResetDiskTypes` <a name="ResetDiskTypes" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetDiskTypes"></a>

```csharp
private void ResetDiskTypes()
```

##### `ResetExcludeFamilies` <a name="ResetExcludeFamilies" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetExcludeFamilies"></a>

```csharp
private void ResetExcludeFamilies()
```

##### `ResetExcludeMetal` <a name="ResetExcludeMetal" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetExcludeMetal"></a>

```csharp
private void ResetExcludeMetal()
```

##### `ResetHypervisor` <a name="ResetHypervisor" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetHypervisor"></a>

```csharp
private void ResetHypervisor()
```

##### `ResetIncludeFamilies` <a name="ResetIncludeFamilies" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetIncludeFamilies"></a>

```csharp
private void ResetIncludeFamilies()
```

##### `ResetIsEnaSupported` <a name="ResetIsEnaSupported" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetIsEnaSupported"></a>

```csharp
private void ResetIsEnaSupported()
```

##### `ResetMaxGpu` <a name="ResetMaxGpu" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMaxGpu"></a>

```csharp
private void ResetMaxGpu()
```

##### `ResetMaxMemoryGib` <a name="ResetMaxMemoryGib" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMaxMemoryGib"></a>

```csharp
private void ResetMaxMemoryGib()
```

##### `ResetMaxNetworkPerformance` <a name="ResetMaxNetworkPerformance" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMaxNetworkPerformance"></a>

```csharp
private void ResetMaxNetworkPerformance()
```

##### `ResetMaxVcpu` <a name="ResetMaxVcpu" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMaxVcpu"></a>

```csharp
private void ResetMaxVcpu()
```

##### `ResetMinEnis` <a name="ResetMinEnis" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMinEnis"></a>

```csharp
private void ResetMinEnis()
```

##### `ResetMinGpu` <a name="ResetMinGpu" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMinGpu"></a>

```csharp
private void ResetMinGpu()
```

##### `ResetMinMemoryGib` <a name="ResetMinMemoryGib" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMinMemoryGib"></a>

```csharp
private void ResetMinMemoryGib()
```

##### `ResetMinNetworkPerformance` <a name="ResetMinNetworkPerformance" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMinNetworkPerformance"></a>

```csharp
private void ResetMinNetworkPerformance()
```

##### `ResetMinVcpu` <a name="ResetMinVcpu" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMinVcpu"></a>

```csharp
private void ResetMinVcpu()
```

##### `ResetRootDeviceTypes` <a name="ResetRootDeviceTypes" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetRootDeviceTypes"></a>

```csharp
private void ResetRootDeviceTypes()
```

##### `ResetVirtualizationTypes` <a name="ResetVirtualizationTypes" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetVirtualizationTypes"></a>

```csharp
private void ResetVirtualizationTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.architecturesInput">ArchitecturesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.categoriesInput">CategoriesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.diskTypesInput">DiskTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.excludeFamiliesInput">ExcludeFamiliesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.excludeMetalInput">ExcludeMetalInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.hypervisorInput">HypervisorInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.includeFamiliesInput">IncludeFamiliesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.isEnaSupportedInput">IsEnaSupportedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxGpuInput">MaxGpuInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxMemoryGibInput">MaxMemoryGibInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxNetworkPerformanceInput">MaxNetworkPerformanceInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxVcpuInput">MaxVcpuInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minEnisInput">MinEnisInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minGpuInput">MinGpuInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minMemoryGibInput">MinMemoryGibInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minNetworkPerformanceInput">MinNetworkPerformanceInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minVcpuInput">MinVcpuInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.rootDeviceTypesInput">RootDeviceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.virtualizationTypesInput">VirtualizationTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.architectures">Architectures</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.categories">Categories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.diskTypes">DiskTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.excludeFamilies">ExcludeFamilies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.excludeMetal">ExcludeMetal</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.hypervisor">Hypervisor</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.includeFamilies">IncludeFamilies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.isEnaSupported">IsEnaSupported</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxGpu">MaxGpu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxMemoryGib">MaxMemoryGib</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxNetworkPerformance">MaxNetworkPerformance</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxVcpu">MaxVcpu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minEnis">MinEnis</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minGpu">MinGpu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minMemoryGib">MinMemoryGib</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minNetworkPerformance">MinNetworkPerformance</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minVcpu">MinVcpu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.rootDeviceTypes">RootDeviceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.virtualizationTypes">VirtualizationTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters">OceanAwsFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArchitecturesInput`<sup>Optional</sup> <a name="ArchitecturesInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.architecturesInput"></a>

```csharp
public string[] ArchitecturesInput { get; }
```

- *Type:* string[]

---

##### `CategoriesInput`<sup>Optional</sup> <a name="CategoriesInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.categoriesInput"></a>

```csharp
public string[] CategoriesInput { get; }
```

- *Type:* string[]

---

##### `DiskTypesInput`<sup>Optional</sup> <a name="DiskTypesInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.diskTypesInput"></a>

```csharp
public string[] DiskTypesInput { get; }
```

- *Type:* string[]

---

##### `ExcludeFamiliesInput`<sup>Optional</sup> <a name="ExcludeFamiliesInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.excludeFamiliesInput"></a>

```csharp
public string[] ExcludeFamiliesInput { get; }
```

- *Type:* string[]

---

##### `ExcludeMetalInput`<sup>Optional</sup> <a name="ExcludeMetalInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.excludeMetalInput"></a>

```csharp
public object ExcludeMetalInput { get; }
```

- *Type:* object

---

##### `HypervisorInput`<sup>Optional</sup> <a name="HypervisorInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.hypervisorInput"></a>

```csharp
public string[] HypervisorInput { get; }
```

- *Type:* string[]

---

##### `IncludeFamiliesInput`<sup>Optional</sup> <a name="IncludeFamiliesInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.includeFamiliesInput"></a>

```csharp
public string[] IncludeFamiliesInput { get; }
```

- *Type:* string[]

---

##### `IsEnaSupportedInput`<sup>Optional</sup> <a name="IsEnaSupportedInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.isEnaSupportedInput"></a>

```csharp
public string IsEnaSupportedInput { get; }
```

- *Type:* string

---

##### `MaxGpuInput`<sup>Optional</sup> <a name="MaxGpuInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxGpuInput"></a>

```csharp
public double MaxGpuInput { get; }
```

- *Type:* double

---

##### `MaxMemoryGibInput`<sup>Optional</sup> <a name="MaxMemoryGibInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxMemoryGibInput"></a>

```csharp
public double MaxMemoryGibInput { get; }
```

- *Type:* double

---

##### `MaxNetworkPerformanceInput`<sup>Optional</sup> <a name="MaxNetworkPerformanceInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxNetworkPerformanceInput"></a>

```csharp
public double MaxNetworkPerformanceInput { get; }
```

- *Type:* double

---

##### `MaxVcpuInput`<sup>Optional</sup> <a name="MaxVcpuInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxVcpuInput"></a>

```csharp
public double MaxVcpuInput { get; }
```

- *Type:* double

---

##### `MinEnisInput`<sup>Optional</sup> <a name="MinEnisInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minEnisInput"></a>

```csharp
public double MinEnisInput { get; }
```

- *Type:* double

---

##### `MinGpuInput`<sup>Optional</sup> <a name="MinGpuInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minGpuInput"></a>

```csharp
public double MinGpuInput { get; }
```

- *Type:* double

---

##### `MinMemoryGibInput`<sup>Optional</sup> <a name="MinMemoryGibInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minMemoryGibInput"></a>

```csharp
public double MinMemoryGibInput { get; }
```

- *Type:* double

---

##### `MinNetworkPerformanceInput`<sup>Optional</sup> <a name="MinNetworkPerformanceInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minNetworkPerformanceInput"></a>

```csharp
public double MinNetworkPerformanceInput { get; }
```

- *Type:* double

---

##### `MinVcpuInput`<sup>Optional</sup> <a name="MinVcpuInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minVcpuInput"></a>

```csharp
public double MinVcpuInput { get; }
```

- *Type:* double

---

##### `RootDeviceTypesInput`<sup>Optional</sup> <a name="RootDeviceTypesInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.rootDeviceTypesInput"></a>

```csharp
public string[] RootDeviceTypesInput { get; }
```

- *Type:* string[]

---

##### `VirtualizationTypesInput`<sup>Optional</sup> <a name="VirtualizationTypesInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.virtualizationTypesInput"></a>

```csharp
public string[] VirtualizationTypesInput { get; }
```

- *Type:* string[]

---

##### `Architectures`<sup>Required</sup> <a name="Architectures" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.architectures"></a>

```csharp
public string[] Architectures { get; }
```

- *Type:* string[]

---

##### `Categories`<sup>Required</sup> <a name="Categories" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.categories"></a>

```csharp
public string[] Categories { get; }
```

- *Type:* string[]

---

##### `DiskTypes`<sup>Required</sup> <a name="DiskTypes" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.diskTypes"></a>

```csharp
public string[] DiskTypes { get; }
```

- *Type:* string[]

---

##### `ExcludeFamilies`<sup>Required</sup> <a name="ExcludeFamilies" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.excludeFamilies"></a>

```csharp
public string[] ExcludeFamilies { get; }
```

- *Type:* string[]

---

##### `ExcludeMetal`<sup>Required</sup> <a name="ExcludeMetal" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.excludeMetal"></a>

```csharp
public object ExcludeMetal { get; }
```

- *Type:* object

---

##### `Hypervisor`<sup>Required</sup> <a name="Hypervisor" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.hypervisor"></a>

```csharp
public string[] Hypervisor { get; }
```

- *Type:* string[]

---

##### `IncludeFamilies`<sup>Required</sup> <a name="IncludeFamilies" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.includeFamilies"></a>

```csharp
public string[] IncludeFamilies { get; }
```

- *Type:* string[]

---

##### `IsEnaSupported`<sup>Required</sup> <a name="IsEnaSupported" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.isEnaSupported"></a>

```csharp
public string IsEnaSupported { get; }
```

- *Type:* string

---

##### `MaxGpu`<sup>Required</sup> <a name="MaxGpu" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxGpu"></a>

```csharp
public double MaxGpu { get; }
```

- *Type:* double

---

##### `MaxMemoryGib`<sup>Required</sup> <a name="MaxMemoryGib" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxMemoryGib"></a>

```csharp
public double MaxMemoryGib { get; }
```

- *Type:* double

---

##### `MaxNetworkPerformance`<sup>Required</sup> <a name="MaxNetworkPerformance" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxNetworkPerformance"></a>

```csharp
public double MaxNetworkPerformance { get; }
```

- *Type:* double

---

##### `MaxVcpu`<sup>Required</sup> <a name="MaxVcpu" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxVcpu"></a>

```csharp
public double MaxVcpu { get; }
```

- *Type:* double

---

##### `MinEnis`<sup>Required</sup> <a name="MinEnis" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minEnis"></a>

```csharp
public double MinEnis { get; }
```

- *Type:* double

---

##### `MinGpu`<sup>Required</sup> <a name="MinGpu" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minGpu"></a>

```csharp
public double MinGpu { get; }
```

- *Type:* double

---

##### `MinMemoryGib`<sup>Required</sup> <a name="MinMemoryGib" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minMemoryGib"></a>

```csharp
public double MinMemoryGib { get; }
```

- *Type:* double

---

##### `MinNetworkPerformance`<sup>Required</sup> <a name="MinNetworkPerformance" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minNetworkPerformance"></a>

```csharp
public double MinNetworkPerformance { get; }
```

- *Type:* double

---

##### `MinVcpu`<sup>Required</sup> <a name="MinVcpu" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minVcpu"></a>

```csharp
public double MinVcpu { get; }
```

- *Type:* double

---

##### `RootDeviceTypes`<sup>Required</sup> <a name="RootDeviceTypes" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.rootDeviceTypes"></a>

```csharp
public string[] RootDeviceTypes { get; }
```

- *Type:* string[]

---

##### `VirtualizationTypes`<sup>Required</sup> <a name="VirtualizationTypes" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.virtualizationTypes"></a>

```csharp
public string[] VirtualizationTypes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.internalValue"></a>

```csharp
public OceanAwsFilters InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters">OceanAwsFilters</a>

---


### OceanAwsInstanceMetadataOptionsOutputReference <a name="OceanAwsInstanceMetadataOptionsOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsInstanceMetadataOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.resetHttpPutResponseHopLimit">ResetHttpPutResponseHopLimit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHttpPutResponseHopLimit` <a name="ResetHttpPutResponseHopLimit" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.resetHttpPutResponseHopLimit"></a>

```csharp
private void ResetHttpPutResponseHopLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput">HttpPutResponseHopLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.property.httpTokensInput">HttpTokensInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit">HttpPutResponseHopLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.property.httpTokens">HttpTokens</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptions">OceanAwsInstanceMetadataOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HttpPutResponseHopLimitInput`<sup>Optional</sup> <a name="HttpPutResponseHopLimitInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput"></a>

```csharp
public double HttpPutResponseHopLimitInput { get; }
```

- *Type:* double

---

##### `HttpTokensInput`<sup>Optional</sup> <a name="HttpTokensInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.property.httpTokensInput"></a>

```csharp
public string HttpTokensInput { get; }
```

- *Type:* string

---

##### `HttpPutResponseHopLimit`<sup>Required</sup> <a name="HttpPutResponseHopLimit" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit"></a>

```csharp
public double HttpPutResponseHopLimit { get; }
```

- *Type:* double

---

##### `HttpTokens`<sup>Required</sup> <a name="HttpTokens" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.property.httpTokens"></a>

```csharp
public string HttpTokens { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.property.internalValue"></a>

```csharp
public OceanAwsInstanceMetadataOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptions">OceanAwsInstanceMetadataOptions</a>

---


### OceanAwsLoadBalancersList <a name="OceanAwsLoadBalancersList" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLoadBalancersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.get"></a>

```csharp
private OceanAwsLoadBalancersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAwsLoadBalancersOutputReference <a name="OceanAwsLoadBalancersOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLoadBalancersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.resetArn">ResetArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArn` <a name="ResetArn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.resetArn"></a>

```csharp
private void ResetArn()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAwsLoggingExportOutputReference <a name="OceanAwsLoggingExportOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLoggingExportOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.putS3">PutS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.resetS3">ResetS3</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3` <a name="PutS3" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.putS3"></a>

```csharp
private void PutS3(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.putS3.parameter.value"></a>

- *Type:* object

---

##### `ResetS3` <a name="ResetS3" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.resetS3"></a>

```csharp
private void ResetS3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List">OceanAwsLoggingExportS3List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.property.s3Input">S3Input</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExport">OceanAwsLoggingExport</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.property.s3"></a>

```csharp
public OceanAwsLoggingExportS3List S3 { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List">OceanAwsLoggingExportS3List</a>

---

##### `S3Input`<sup>Optional</sup> <a name="S3Input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.property.s3Input"></a>

```csharp
public object S3Input { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.property.internalValue"></a>

```csharp
public OceanAwsLoggingExport InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExport">OceanAwsLoggingExport</a>

---


### OceanAwsLoggingExportS3List <a name="OceanAwsLoggingExportS3List" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLoggingExportS3List(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.get"></a>

```csharp
private OceanAwsLoggingExportS3OutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAwsLoggingExportS3OutputReference <a name="OceanAwsLoggingExportS3OutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLoggingExportS3OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAwsLoggingOutputReference <a name="OceanAwsLoggingOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsLoggingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.putExport">PutExport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.resetExport">ResetExport</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExport` <a name="PutExport" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.putExport"></a>

```csharp
private void PutExport(OceanAwsLoggingExport Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.putExport.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExport">OceanAwsLoggingExport</a>

---

##### `ResetExport` <a name="ResetExport" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.resetExport"></a>

```csharp
private void ResetExport()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.property.export">Export</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference">OceanAwsLoggingExportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.property.exportInput">ExportInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExport">OceanAwsLoggingExport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLogging">OceanAwsLogging</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Export`<sup>Required</sup> <a name="Export" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.property.export"></a>

```csharp
public OceanAwsLoggingExportOutputReference Export { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference">OceanAwsLoggingExportOutputReference</a>

---

##### `ExportInput`<sup>Optional</sup> <a name="ExportInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.property.exportInput"></a>

```csharp
public OceanAwsLoggingExport ExportInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExport">OceanAwsLoggingExport</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.property.internalValue"></a>

```csharp
public OceanAwsLogging InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLogging">OceanAwsLogging</a>

---


### OceanAwsResourceTagSpecificationList <a name="OceanAwsResourceTagSpecificationList" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsResourceTagSpecificationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationList.get"></a>

```csharp
private OceanAwsResourceTagSpecificationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAwsResourceTagSpecificationOutputReference <a name="OceanAwsResourceTagSpecificationOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsResourceTagSpecificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.resetShouldTagVolumes">ResetShouldTagVolumes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetShouldTagVolumes` <a name="ResetShouldTagVolumes" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.resetShouldTagVolumes"></a>

```csharp
private void ResetShouldTagVolumes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.property.shouldTagVolumesInput">ShouldTagVolumesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.property.shouldTagVolumes">ShouldTagVolumes</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ShouldTagVolumesInput`<sup>Optional</sup> <a name="ShouldTagVolumesInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.property.shouldTagVolumesInput"></a>

```csharp
public object ShouldTagVolumesInput { get; }
```

- *Type:* object

---

##### `ShouldTagVolumes`<sup>Required</sup> <a name="ShouldTagVolumes" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.property.shouldTagVolumes"></a>

```csharp
public object ShouldTagVolumes { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAwsScheduledTaskOutputReference <a name="OceanAwsScheduledTaskOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsScheduledTaskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.putShutdownHours">PutShutdownHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.putTasks">PutTasks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.resetShutdownHours">ResetShutdownHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.resetTasks">ResetTasks</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutShutdownHours` <a name="PutShutdownHours" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.putShutdownHours"></a>

```csharp
private void PutShutdownHours(OceanAwsScheduledTaskShutdownHours Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.putShutdownHours.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHours">OceanAwsScheduledTaskShutdownHours</a>

---

##### `PutTasks` <a name="PutTasks" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.putTasks"></a>

```csharp
private void PutTasks(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.putTasks.parameter.value"></a>

- *Type:* object

---

##### `ResetShutdownHours` <a name="ResetShutdownHours" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.resetShutdownHours"></a>

```csharp
private void ResetShutdownHours()
```

##### `ResetTasks` <a name="ResetTasks" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.resetTasks"></a>

```csharp
private void ResetTasks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.property.shutdownHours">ShutdownHours</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference">OceanAwsScheduledTaskShutdownHoursOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.property.tasks">Tasks</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList">OceanAwsScheduledTaskTasksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.property.shutdownHoursInput">ShutdownHoursInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHours">OceanAwsScheduledTaskShutdownHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.property.tasksInput">TasksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTask">OceanAwsScheduledTask</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ShutdownHours`<sup>Required</sup> <a name="ShutdownHours" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.property.shutdownHours"></a>

```csharp
public OceanAwsScheduledTaskShutdownHoursOutputReference ShutdownHours { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference">OceanAwsScheduledTaskShutdownHoursOutputReference</a>

---

##### `Tasks`<sup>Required</sup> <a name="Tasks" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.property.tasks"></a>

```csharp
public OceanAwsScheduledTaskTasksList Tasks { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList">OceanAwsScheduledTaskTasksList</a>

---

##### `ShutdownHoursInput`<sup>Optional</sup> <a name="ShutdownHoursInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.property.shutdownHoursInput"></a>

```csharp
public OceanAwsScheduledTaskShutdownHours ShutdownHoursInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHours">OceanAwsScheduledTaskShutdownHours</a>

---

##### `TasksInput`<sup>Optional</sup> <a name="TasksInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.property.tasksInput"></a>

```csharp
public object TasksInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.property.internalValue"></a>

```csharp
public OceanAwsScheduledTask InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTask">OceanAwsScheduledTask</a>

---


### OceanAwsScheduledTaskShutdownHoursOutputReference <a name="OceanAwsScheduledTaskShutdownHoursOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsScheduledTaskShutdownHoursOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.resetIsEnabled"></a>

```csharp
private void ResetIsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.property.timeWindowsInput">TimeWindowsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.property.isEnabled">IsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.property.timeWindows">TimeWindows</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHours">OceanAwsScheduledTaskShutdownHours</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.property.isEnabledInput"></a>

```csharp
public object IsEnabledInput { get; }
```

- *Type:* object

---

##### `TimeWindowsInput`<sup>Optional</sup> <a name="TimeWindowsInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.property.timeWindowsInput"></a>

```csharp
public string[] TimeWindowsInput { get; }
```

- *Type:* string[]

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.property.isEnabled"></a>

```csharp
public object IsEnabled { get; }
```

- *Type:* object

---

##### `TimeWindows`<sup>Required</sup> <a name="TimeWindows" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.property.timeWindows"></a>

```csharp
public string[] TimeWindows { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.property.internalValue"></a>

```csharp
public OceanAwsScheduledTaskShutdownHours InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHours">OceanAwsScheduledTaskShutdownHours</a>

---


### OceanAwsScheduledTaskTasksList <a name="OceanAwsScheduledTaskTasksList" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsScheduledTaskTasksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.get"></a>

```csharp
private OceanAwsScheduledTaskTasksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAwsScheduledTaskTasksOutputReference <a name="OceanAwsScheduledTaskTasksOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsScheduledTaskTasksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.putParameters">PutParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParameters` <a name="PutParameters" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.putParameters"></a>

```csharp
private void PutParameters(OceanAwsScheduledTaskTasksParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.putParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParameters">OceanAwsScheduledTaskTasksParameters</a>

---

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.parameters">Parameters</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference">OceanAwsScheduledTaskTasksParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.cronExpressionInput">CronExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.parametersInput">ParametersInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParameters">OceanAwsScheduledTaskTasksParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.taskTypeInput">TaskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.cronExpression">CronExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.isEnabled">IsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.taskType">TaskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.parameters"></a>

```csharp
public OceanAwsScheduledTaskTasksParametersOutputReference Parameters { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference">OceanAwsScheduledTaskTasksParametersOutputReference</a>

---

##### `CronExpressionInput`<sup>Optional</sup> <a name="CronExpressionInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.cronExpressionInput"></a>

```csharp
public string CronExpressionInput { get; }
```

- *Type:* string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.isEnabledInput"></a>

```csharp
public object IsEnabledInput { get; }
```

- *Type:* object

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.parametersInput"></a>

```csharp
public OceanAwsScheduledTaskTasksParameters ParametersInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParameters">OceanAwsScheduledTaskTasksParameters</a>

---

##### `TaskTypeInput`<sup>Optional</sup> <a name="TaskTypeInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.taskTypeInput"></a>

```csharp
public string TaskTypeInput { get; }
```

- *Type:* string

---

##### `CronExpression`<sup>Required</sup> <a name="CronExpression" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.cronExpression"></a>

```csharp
public string CronExpression { get; }
```

- *Type:* string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.isEnabled"></a>

```csharp
public object IsEnabled { get; }
```

- *Type:* object

---

##### `TaskType`<sup>Required</sup> <a name="TaskType" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.taskType"></a>

```csharp
public string TaskType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference <a name="OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.resetBatchMinHealthyPercentage">ResetBatchMinHealthyPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.resetBatchSizePercentage">ResetBatchSizePercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.resetRespectPdb">ResetRespectPdb</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBatchMinHealthyPercentage` <a name="ResetBatchMinHealthyPercentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.resetBatchMinHealthyPercentage"></a>

```csharp
private void ResetBatchMinHealthyPercentage()
```

##### `ResetBatchSizePercentage` <a name="ResetBatchSizePercentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.resetBatchSizePercentage"></a>

```csharp
private void ResetBatchSizePercentage()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetRespectPdb` <a name="ResetRespectPdb" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.resetRespectPdb"></a>

```csharp
private void ResetRespectPdb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.property.batchMinHealthyPercentageInput">BatchMinHealthyPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.property.batchSizePercentageInput">BatchSizePercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.property.respectPdbInput">RespectPdbInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.property.batchMinHealthyPercentage">BatchMinHealthyPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.property.batchSizePercentage">BatchSizePercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.property.respectPdb">RespectPdb</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRoll">OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRoll</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BatchMinHealthyPercentageInput`<sup>Optional</sup> <a name="BatchMinHealthyPercentageInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.property.batchMinHealthyPercentageInput"></a>

```csharp
public double BatchMinHealthyPercentageInput { get; }
```

- *Type:* double

---

##### `BatchSizePercentageInput`<sup>Optional</sup> <a name="BatchSizePercentageInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.property.batchSizePercentageInput"></a>

```csharp
public double BatchSizePercentageInput { get; }
```

- *Type:* double

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `RespectPdbInput`<sup>Optional</sup> <a name="RespectPdbInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.property.respectPdbInput"></a>

```csharp
public object RespectPdbInput { get; }
```

- *Type:* object

---

##### `BatchMinHealthyPercentage`<sup>Required</sup> <a name="BatchMinHealthyPercentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.property.batchMinHealthyPercentage"></a>

```csharp
public double BatchMinHealthyPercentage { get; }
```

- *Type:* double

---

##### `BatchSizePercentage`<sup>Required</sup> <a name="BatchSizePercentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.property.batchSizePercentage"></a>

```csharp
public double BatchSizePercentage { get; }
```

- *Type:* double

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `RespectPdb`<sup>Required</sup> <a name="RespectPdb" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.property.respectPdb"></a>

```csharp
public object RespectPdb { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference.property.internalValue"></a>

```csharp
public OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRoll InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRoll">OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRoll</a>

---


### OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference <a name="OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.putAmiAutoUpdateClusterRoll">PutAmiAutoUpdateClusterRoll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.resetAmiAutoUpdateClusterRoll">ResetAmiAutoUpdateClusterRoll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.resetApplyRoll">ResetApplyRoll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.resetMinorVersion">ResetMinorVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.resetPatch">ResetPatch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAmiAutoUpdateClusterRoll` <a name="PutAmiAutoUpdateClusterRoll" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.putAmiAutoUpdateClusterRoll"></a>

```csharp
private void PutAmiAutoUpdateClusterRoll(OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRoll Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.putAmiAutoUpdateClusterRoll.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRoll">OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRoll</a>

---

##### `ResetAmiAutoUpdateClusterRoll` <a name="ResetAmiAutoUpdateClusterRoll" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.resetAmiAutoUpdateClusterRoll"></a>

```csharp
private void ResetAmiAutoUpdateClusterRoll()
```

##### `ResetApplyRoll` <a name="ResetApplyRoll" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.resetApplyRoll"></a>

```csharp
private void ResetApplyRoll()
```

##### `ResetMinorVersion` <a name="ResetMinorVersion" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.resetMinorVersion"></a>

```csharp
private void ResetMinorVersion()
```

##### `ResetPatch` <a name="ResetPatch" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.resetPatch"></a>

```csharp
private void ResetPatch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.property.amiAutoUpdateClusterRoll">AmiAutoUpdateClusterRoll</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference">OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.property.amiAutoUpdateClusterRollInput">AmiAutoUpdateClusterRollInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRoll">OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRoll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.property.applyRollInput">ApplyRollInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.property.minorVersionInput">MinorVersionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.property.patchInput">PatchInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.property.applyRoll">ApplyRoll</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.property.minorVersion">MinorVersion</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.property.patch">Patch</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdate">OceanAwsScheduledTaskTasksParametersAmiAutoUpdate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AmiAutoUpdateClusterRoll`<sup>Required</sup> <a name="AmiAutoUpdateClusterRoll" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.property.amiAutoUpdateClusterRoll"></a>

```csharp
public OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference AmiAutoUpdateClusterRoll { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference">OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRollOutputReference</a>

---

##### `AmiAutoUpdateClusterRollInput`<sup>Optional</sup> <a name="AmiAutoUpdateClusterRollInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.property.amiAutoUpdateClusterRollInput"></a>

```csharp
public OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRoll AmiAutoUpdateClusterRollInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRoll">OceanAwsScheduledTaskTasksParametersAmiAutoUpdateAmiAutoUpdateClusterRoll</a>

---

##### `ApplyRollInput`<sup>Optional</sup> <a name="ApplyRollInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.property.applyRollInput"></a>

```csharp
public object ApplyRollInput { get; }
```

- *Type:* object

---

##### `MinorVersionInput`<sup>Optional</sup> <a name="MinorVersionInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.property.minorVersionInput"></a>

```csharp
public object MinorVersionInput { get; }
```

- *Type:* object

---

##### `PatchInput`<sup>Optional</sup> <a name="PatchInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.property.patchInput"></a>

```csharp
public object PatchInput { get; }
```

- *Type:* object

---

##### `ApplyRoll`<sup>Required</sup> <a name="ApplyRoll" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.property.applyRoll"></a>

```csharp
public object ApplyRoll { get; }
```

- *Type:* object

---

##### `MinorVersion`<sup>Required</sup> <a name="MinorVersion" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.property.minorVersion"></a>

```csharp
public object MinorVersion { get; }
```

- *Type:* object

---

##### `Patch`<sup>Required</sup> <a name="Patch" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.property.patch"></a>

```csharp
public object Patch { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference.property.internalValue"></a>

```csharp
public OceanAwsScheduledTaskTasksParametersAmiAutoUpdate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdate">OceanAwsScheduledTaskTasksParametersAmiAutoUpdate</a>

---


### OceanAwsScheduledTaskTasksParametersOutputReference <a name="OceanAwsScheduledTaskTasksParametersOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsScheduledTaskTasksParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.putAmiAutoUpdate">PutAmiAutoUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.putParametersClusterRoll">PutParametersClusterRoll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.resetAmiAutoUpdate">ResetAmiAutoUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.resetParametersClusterRoll">ResetParametersClusterRoll</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAmiAutoUpdate` <a name="PutAmiAutoUpdate" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.putAmiAutoUpdate"></a>

```csharp
private void PutAmiAutoUpdate(OceanAwsScheduledTaskTasksParametersAmiAutoUpdate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.putAmiAutoUpdate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdate">OceanAwsScheduledTaskTasksParametersAmiAutoUpdate</a>

---

##### `PutParametersClusterRoll` <a name="PutParametersClusterRoll" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.putParametersClusterRoll"></a>

```csharp
private void PutParametersClusterRoll(OceanAwsScheduledTaskTasksParametersParametersClusterRoll Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.putParametersClusterRoll.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRoll">OceanAwsScheduledTaskTasksParametersParametersClusterRoll</a>

---

##### `ResetAmiAutoUpdate` <a name="ResetAmiAutoUpdate" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.resetAmiAutoUpdate"></a>

```csharp
private void ResetAmiAutoUpdate()
```

##### `ResetParametersClusterRoll` <a name="ResetParametersClusterRoll" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.resetParametersClusterRoll"></a>

```csharp
private void ResetParametersClusterRoll()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.property.amiAutoUpdate">AmiAutoUpdate</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference">OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.property.parametersClusterRoll">ParametersClusterRoll</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference">OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.property.amiAutoUpdateInput">AmiAutoUpdateInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdate">OceanAwsScheduledTaskTasksParametersAmiAutoUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.property.parametersClusterRollInput">ParametersClusterRollInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRoll">OceanAwsScheduledTaskTasksParametersParametersClusterRoll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParameters">OceanAwsScheduledTaskTasksParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AmiAutoUpdate`<sup>Required</sup> <a name="AmiAutoUpdate" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.property.amiAutoUpdate"></a>

```csharp
public OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference AmiAutoUpdate { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference">OceanAwsScheduledTaskTasksParametersAmiAutoUpdateOutputReference</a>

---

##### `ParametersClusterRoll`<sup>Required</sup> <a name="ParametersClusterRoll" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.property.parametersClusterRoll"></a>

```csharp
public OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference ParametersClusterRoll { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference">OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference</a>

---

##### `AmiAutoUpdateInput`<sup>Optional</sup> <a name="AmiAutoUpdateInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.property.amiAutoUpdateInput"></a>

```csharp
public OceanAwsScheduledTaskTasksParametersAmiAutoUpdate AmiAutoUpdateInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersAmiAutoUpdate">OceanAwsScheduledTaskTasksParametersAmiAutoUpdate</a>

---

##### `ParametersClusterRollInput`<sup>Optional</sup> <a name="ParametersClusterRollInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.property.parametersClusterRollInput"></a>

```csharp
public OceanAwsScheduledTaskTasksParametersParametersClusterRoll ParametersClusterRollInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRoll">OceanAwsScheduledTaskTasksParametersParametersClusterRoll</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersOutputReference.property.internalValue"></a>

```csharp
public OceanAwsScheduledTaskTasksParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParameters">OceanAwsScheduledTaskTasksParameters</a>

---


### OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference <a name="OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.resetBatchMinHealthyPercentage">ResetBatchMinHealthyPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.resetBatchSizePercentage">ResetBatchSizePercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.resetRespectPdb">ResetRespectPdb</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBatchMinHealthyPercentage` <a name="ResetBatchMinHealthyPercentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.resetBatchMinHealthyPercentage"></a>

```csharp
private void ResetBatchMinHealthyPercentage()
```

##### `ResetBatchSizePercentage` <a name="ResetBatchSizePercentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.resetBatchSizePercentage"></a>

```csharp
private void ResetBatchSizePercentage()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetRespectPdb` <a name="ResetRespectPdb" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.resetRespectPdb"></a>

```csharp
private void ResetRespectPdb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.property.batchMinHealthyPercentageInput">BatchMinHealthyPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.property.batchSizePercentageInput">BatchSizePercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.property.respectPdbInput">RespectPdbInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.property.batchMinHealthyPercentage">BatchMinHealthyPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.property.batchSizePercentage">BatchSizePercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.property.respectPdb">RespectPdb</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRoll">OceanAwsScheduledTaskTasksParametersParametersClusterRoll</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BatchMinHealthyPercentageInput`<sup>Optional</sup> <a name="BatchMinHealthyPercentageInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.property.batchMinHealthyPercentageInput"></a>

```csharp
public double BatchMinHealthyPercentageInput { get; }
```

- *Type:* double

---

##### `BatchSizePercentageInput`<sup>Optional</sup> <a name="BatchSizePercentageInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.property.batchSizePercentageInput"></a>

```csharp
public double BatchSizePercentageInput { get; }
```

- *Type:* double

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `RespectPdbInput`<sup>Optional</sup> <a name="RespectPdbInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.property.respectPdbInput"></a>

```csharp
public object RespectPdbInput { get; }
```

- *Type:* object

---

##### `BatchMinHealthyPercentage`<sup>Required</sup> <a name="BatchMinHealthyPercentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.property.batchMinHealthyPercentage"></a>

```csharp
public double BatchMinHealthyPercentage { get; }
```

- *Type:* double

---

##### `BatchSizePercentage`<sup>Required</sup> <a name="BatchSizePercentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.property.batchSizePercentage"></a>

```csharp
public double BatchSizePercentage { get; }
```

- *Type:* double

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `RespectPdb`<sup>Required</sup> <a name="RespectPdb" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.property.respectPdb"></a>

```csharp
public object RespectPdb { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRollOutputReference.property.internalValue"></a>

```csharp
public OceanAwsScheduledTaskTasksParametersParametersClusterRoll InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksParametersParametersClusterRoll">OceanAwsScheduledTaskTasksParametersParametersClusterRoll</a>

---


### OceanAwsTagsList <a name="OceanAwsTagsList" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.get"></a>

```csharp
private OceanAwsTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAwsTagsOutputReference <a name="OceanAwsTagsOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAwsUpdatePolicyOutputReference <a name="OceanAwsUpdatePolicyOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsUpdatePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.putRollConfig">PutRollConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.resetAutoApplyTags">ResetAutoApplyTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.resetConditionedRoll">ResetConditionedRoll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.resetConditionedRollParams">ResetConditionedRollParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.resetRollConfig">ResetRollConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRollConfig` <a name="PutRollConfig" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.putRollConfig"></a>

```csharp
private void PutRollConfig(OceanAwsUpdatePolicyRollConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.putRollConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig">OceanAwsUpdatePolicyRollConfig</a>

---

##### `ResetAutoApplyTags` <a name="ResetAutoApplyTags" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.resetAutoApplyTags"></a>

```csharp
private void ResetAutoApplyTags()
```

##### `ResetConditionedRoll` <a name="ResetConditionedRoll" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.resetConditionedRoll"></a>

```csharp
private void ResetConditionedRoll()
```

##### `ResetConditionedRollParams` <a name="ResetConditionedRollParams" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.resetConditionedRollParams"></a>

```csharp
private void ResetConditionedRollParams()
```

##### `ResetRollConfig` <a name="ResetRollConfig" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.resetRollConfig"></a>

```csharp
private void ResetRollConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.rollConfig">RollConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference">OceanAwsUpdatePolicyRollConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.autoApplyTagsInput">AutoApplyTagsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.conditionedRollInput">ConditionedRollInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.conditionedRollParamsInput">ConditionedRollParamsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.rollConfigInput">RollConfigInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig">OceanAwsUpdatePolicyRollConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.shouldRollInput">ShouldRollInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.autoApplyTags">AutoApplyTags</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.conditionedRoll">ConditionedRoll</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.conditionedRollParams">ConditionedRollParams</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.shouldRoll">ShouldRoll</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy">OceanAwsUpdatePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RollConfig`<sup>Required</sup> <a name="RollConfig" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.rollConfig"></a>

```csharp
public OceanAwsUpdatePolicyRollConfigOutputReference RollConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference">OceanAwsUpdatePolicyRollConfigOutputReference</a>

---

##### `AutoApplyTagsInput`<sup>Optional</sup> <a name="AutoApplyTagsInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.autoApplyTagsInput"></a>

```csharp
public object AutoApplyTagsInput { get; }
```

- *Type:* object

---

##### `ConditionedRollInput`<sup>Optional</sup> <a name="ConditionedRollInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.conditionedRollInput"></a>

```csharp
public object ConditionedRollInput { get; }
```

- *Type:* object

---

##### `ConditionedRollParamsInput`<sup>Optional</sup> <a name="ConditionedRollParamsInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.conditionedRollParamsInput"></a>

```csharp
public string[] ConditionedRollParamsInput { get; }
```

- *Type:* string[]

---

##### `RollConfigInput`<sup>Optional</sup> <a name="RollConfigInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.rollConfigInput"></a>

```csharp
public OceanAwsUpdatePolicyRollConfig RollConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig">OceanAwsUpdatePolicyRollConfig</a>

---

##### `ShouldRollInput`<sup>Optional</sup> <a name="ShouldRollInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.shouldRollInput"></a>

```csharp
public object ShouldRollInput { get; }
```

- *Type:* object

---

##### `AutoApplyTags`<sup>Required</sup> <a name="AutoApplyTags" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.autoApplyTags"></a>

```csharp
public object AutoApplyTags { get; }
```

- *Type:* object

---

##### `ConditionedRoll`<sup>Required</sup> <a name="ConditionedRoll" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.conditionedRoll"></a>

```csharp
public object ConditionedRoll { get; }
```

- *Type:* object

---

##### `ConditionedRollParams`<sup>Required</sup> <a name="ConditionedRollParams" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.conditionedRollParams"></a>

```csharp
public string[] ConditionedRollParams { get; }
```

- *Type:* string[]

---

##### `ShouldRoll`<sup>Required</sup> <a name="ShouldRoll" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.shouldRoll"></a>

```csharp
public object ShouldRoll { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.internalValue"></a>

```csharp
public OceanAwsUpdatePolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy">OceanAwsUpdatePolicy</a>

---


### OceanAwsUpdatePolicyRollConfigOutputReference <a name="OceanAwsUpdatePolicyRollConfigOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAwsUpdatePolicyRollConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.resetBatchMinHealthyPercentage">ResetBatchMinHealthyPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.resetLaunchSpecIds">ResetLaunchSpecIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.resetRespectPdb">ResetRespectPdb</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBatchMinHealthyPercentage` <a name="ResetBatchMinHealthyPercentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.resetBatchMinHealthyPercentage"></a>

```csharp
private void ResetBatchMinHealthyPercentage()
```

##### `ResetLaunchSpecIds` <a name="ResetLaunchSpecIds" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.resetLaunchSpecIds"></a>

```csharp
private void ResetLaunchSpecIds()
```

##### `ResetRespectPdb` <a name="ResetRespectPdb" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.resetRespectPdb"></a>

```csharp
private void ResetRespectPdb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.batchMinHealthyPercentageInput">BatchMinHealthyPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.batchSizePercentageInput">BatchSizePercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.launchSpecIdsInput">LaunchSpecIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.respectPdbInput">RespectPdbInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.batchMinHealthyPercentage">BatchMinHealthyPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.batchSizePercentage">BatchSizePercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.launchSpecIds">LaunchSpecIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.respectPdb">RespectPdb</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig">OceanAwsUpdatePolicyRollConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BatchMinHealthyPercentageInput`<sup>Optional</sup> <a name="BatchMinHealthyPercentageInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.batchMinHealthyPercentageInput"></a>

```csharp
public double BatchMinHealthyPercentageInput { get; }
```

- *Type:* double

---

##### `BatchSizePercentageInput`<sup>Optional</sup> <a name="BatchSizePercentageInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.batchSizePercentageInput"></a>

```csharp
public double BatchSizePercentageInput { get; }
```

- *Type:* double

---

##### `LaunchSpecIdsInput`<sup>Optional</sup> <a name="LaunchSpecIdsInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.launchSpecIdsInput"></a>

```csharp
public string[] LaunchSpecIdsInput { get; }
```

- *Type:* string[]

---

##### `RespectPdbInput`<sup>Optional</sup> <a name="RespectPdbInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.respectPdbInput"></a>

```csharp
public object RespectPdbInput { get; }
```

- *Type:* object

---

##### `BatchMinHealthyPercentage`<sup>Required</sup> <a name="BatchMinHealthyPercentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.batchMinHealthyPercentage"></a>

```csharp
public double BatchMinHealthyPercentage { get; }
```

- *Type:* double

---

##### `BatchSizePercentage`<sup>Required</sup> <a name="BatchSizePercentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.batchSizePercentage"></a>

```csharp
public double BatchSizePercentage { get; }
```

- *Type:* double

---

##### `LaunchSpecIds`<sup>Required</sup> <a name="LaunchSpecIds" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.launchSpecIds"></a>

```csharp
public string[] LaunchSpecIds { get; }
```

- *Type:* string[]

---

##### `RespectPdb`<sup>Required</sup> <a name="RespectPdb" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.respectPdb"></a>

```csharp
public object RespectPdb { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.internalValue"></a>

```csharp
public OceanAwsUpdatePolicyRollConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig">OceanAwsUpdatePolicyRollConfig</a>

---



