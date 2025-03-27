# `managedInstanceAws` Submodule <a name="`managedInstanceAws` Submodule" id="@cdktf/provider-spotinst.managedInstanceAws"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedInstanceAws <a name="ManagedInstanceAws" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws spotinst_managed_instance_aws}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ManagedInstanceAws(Construct Scope, string Id, ManagedInstanceAwsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig">ManagedInstanceAwsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig">ManagedInstanceAwsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putBlockDeviceMappings">PutBlockDeviceMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putDelete">PutDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putIntegrationRoute53">PutIntegrationRoute53</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putLoadBalancers">PutLoadBalancers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putManagedInstanceAction">PutManagedInstanceAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putMetadataOptions">PutMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putNetworkInterface">PutNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putResourceRequirements">PutResourceRequirements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putResourceTagSpecification">PutResourceTagSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putRevertToSpot">PutRevertToSpot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putScheduledTask">PutScheduledTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetAutoHealing">ResetAutoHealing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetBlockDeviceMappings">ResetBlockDeviceMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetBlockDevicesMode">ResetBlockDevicesMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetCpuCredits">ResetCpuCredits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetDrainingTimeout">ResetDrainingTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetEbsOptimized">ResetEbsOptimized</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetElasticIp">ResetElasticIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetEnableMonitoring">ResetEnableMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetFallbackToOndemand">ResetFallbackToOndemand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetGracePeriod">ResetGracePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetHealthCheckType">ResetHealthCheckType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetIamInstanceProfile">ResetIamInstanceProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetInstanceTypes">ResetInstanceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetIntegrationRoute53">ResetIntegrationRoute53</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetKeyPair">ResetKeyPair</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetLifeCycle">ResetLifeCycle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetLoadBalancers">ResetLoadBalancers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetManagedInstanceAction">ResetManagedInstanceAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetMetadataOptions">ResetMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetMinimumInstanceLifetime">ResetMinimumInstanceLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetNetworkInterface">ResetNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetOptimizationWindows">ResetOptimizationWindows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetOrientation">ResetOrientation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetPersistPrivateIp">ResetPersistPrivateIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetPersistRootDevice">ResetPersistRootDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetPlacementTenancy">ResetPlacementTenancy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetPreferredType">ResetPreferredType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetPreferredTypes">ResetPreferredTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetPrivateIp">ResetPrivateIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetResourceRequirements">ResetResourceRequirements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetResourceTagSpecification">ResetResourceTagSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetRevertToSpot">ResetRevertToSpot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetScheduledTask">ResetScheduledTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetShutdownScript">ResetShutdownScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetUnhealthyDuration">ResetUnhealthyDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetUserData">ResetUserData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetUtilizeReservedInstances">ResetUtilizeReservedInstances</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBlockDeviceMappings` <a name="PutBlockDeviceMappings" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putBlockDeviceMappings"></a>

```csharp
private void PutBlockDeviceMappings(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putBlockDeviceMappings.parameter.value"></a>

- *Type:* object

---

##### `PutDelete` <a name="PutDelete" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putDelete"></a>

```csharp
private void PutDelete(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putDelete.parameter.value"></a>

- *Type:* object

---

##### `PutIntegrationRoute53` <a name="PutIntegrationRoute53" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putIntegrationRoute53"></a>

```csharp
private void PutIntegrationRoute53(ManagedInstanceAwsIntegrationRoute53 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putIntegrationRoute53.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53">ManagedInstanceAwsIntegrationRoute53</a>

---

##### `PutLoadBalancers` <a name="PutLoadBalancers" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putLoadBalancers"></a>

```csharp
private void PutLoadBalancers(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putLoadBalancers.parameter.value"></a>

- *Type:* object

---

##### `PutManagedInstanceAction` <a name="PutManagedInstanceAction" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putManagedInstanceAction"></a>

```csharp
private void PutManagedInstanceAction(ManagedInstanceAwsManagedInstanceAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putManagedInstanceAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceAction">ManagedInstanceAwsManagedInstanceAction</a>

---

##### `PutMetadataOptions` <a name="PutMetadataOptions" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putMetadataOptions"></a>

```csharp
private void PutMetadataOptions(ManagedInstanceAwsMetadataOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putMetadataOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptions">ManagedInstanceAwsMetadataOptions</a>

---

##### `PutNetworkInterface` <a name="PutNetworkInterface" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putNetworkInterface"></a>

```csharp
private void PutNetworkInterface(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putNetworkInterface.parameter.value"></a>

- *Type:* object

---

##### `PutResourceRequirements` <a name="PutResourceRequirements" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putResourceRequirements"></a>

```csharp
private void PutResourceRequirements(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putResourceRequirements.parameter.value"></a>

- *Type:* object

---

##### `PutResourceTagSpecification` <a name="PutResourceTagSpecification" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putResourceTagSpecification"></a>

```csharp
private void PutResourceTagSpecification(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putResourceTagSpecification.parameter.value"></a>

- *Type:* object

---

##### `PutRevertToSpot` <a name="PutRevertToSpot" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putRevertToSpot"></a>

```csharp
private void PutRevertToSpot(ManagedInstanceAwsRevertToSpot Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putRevertToSpot.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpot">ManagedInstanceAwsRevertToSpot</a>

---

##### `PutScheduledTask` <a name="PutScheduledTask" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putScheduledTask"></a>

```csharp
private void PutScheduledTask(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putScheduledTask.parameter.value"></a>

- *Type:* object

---

##### `PutTags` <a name="PutTags" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putTags"></a>

```csharp
private void PutTags(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.putTags.parameter.value"></a>

- *Type:* object

---

##### `ResetAutoHealing` <a name="ResetAutoHealing" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetAutoHealing"></a>

```csharp
private void ResetAutoHealing()
```

##### `ResetBlockDeviceMappings` <a name="ResetBlockDeviceMappings" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetBlockDeviceMappings"></a>

```csharp
private void ResetBlockDeviceMappings()
```

##### `ResetBlockDevicesMode` <a name="ResetBlockDevicesMode" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetBlockDevicesMode"></a>

```csharp
private void ResetBlockDevicesMode()
```

##### `ResetCpuCredits` <a name="ResetCpuCredits" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetCpuCredits"></a>

```csharp
private void ResetCpuCredits()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDrainingTimeout` <a name="ResetDrainingTimeout" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetDrainingTimeout"></a>

```csharp
private void ResetDrainingTimeout()
```

##### `ResetEbsOptimized` <a name="ResetEbsOptimized" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetEbsOptimized"></a>

```csharp
private void ResetEbsOptimized()
```

##### `ResetElasticIp` <a name="ResetElasticIp" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetElasticIp"></a>

```csharp
private void ResetElasticIp()
```

##### `ResetEnableMonitoring` <a name="ResetEnableMonitoring" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetEnableMonitoring"></a>

```csharp
private void ResetEnableMonitoring()
```

##### `ResetFallbackToOndemand` <a name="ResetFallbackToOndemand" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetFallbackToOndemand"></a>

```csharp
private void ResetFallbackToOndemand()
```

##### `ResetGracePeriod` <a name="ResetGracePeriod" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetGracePeriod"></a>

```csharp
private void ResetGracePeriod()
```

##### `ResetHealthCheckType` <a name="ResetHealthCheckType" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetHealthCheckType"></a>

```csharp
private void ResetHealthCheckType()
```

##### `ResetIamInstanceProfile` <a name="ResetIamInstanceProfile" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetIamInstanceProfile"></a>

```csharp
private void ResetIamInstanceProfile()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInstanceTypes` <a name="ResetInstanceTypes" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetInstanceTypes"></a>

```csharp
private void ResetInstanceTypes()
```

##### `ResetIntegrationRoute53` <a name="ResetIntegrationRoute53" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetIntegrationRoute53"></a>

```csharp
private void ResetIntegrationRoute53()
```

##### `ResetKeyPair` <a name="ResetKeyPair" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetKeyPair"></a>

```csharp
private void ResetKeyPair()
```

##### `ResetLifeCycle` <a name="ResetLifeCycle" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetLifeCycle"></a>

```csharp
private void ResetLifeCycle()
```

##### `ResetLoadBalancers` <a name="ResetLoadBalancers" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetLoadBalancers"></a>

```csharp
private void ResetLoadBalancers()
```

##### `ResetManagedInstanceAction` <a name="ResetManagedInstanceAction" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetManagedInstanceAction"></a>

```csharp
private void ResetManagedInstanceAction()
```

##### `ResetMetadataOptions` <a name="ResetMetadataOptions" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetMetadataOptions"></a>

```csharp
private void ResetMetadataOptions()
```

##### `ResetMinimumInstanceLifetime` <a name="ResetMinimumInstanceLifetime" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetMinimumInstanceLifetime"></a>

```csharp
private void ResetMinimumInstanceLifetime()
```

##### `ResetNetworkInterface` <a name="ResetNetworkInterface" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetNetworkInterface"></a>

```csharp
private void ResetNetworkInterface()
```

##### `ResetOptimizationWindows` <a name="ResetOptimizationWindows" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetOptimizationWindows"></a>

```csharp
private void ResetOptimizationWindows()
```

##### `ResetOrientation` <a name="ResetOrientation" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetOrientation"></a>

```csharp
private void ResetOrientation()
```

##### `ResetPersistPrivateIp` <a name="ResetPersistPrivateIp" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetPersistPrivateIp"></a>

```csharp
private void ResetPersistPrivateIp()
```

##### `ResetPersistRootDevice` <a name="ResetPersistRootDevice" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetPersistRootDevice"></a>

```csharp
private void ResetPersistRootDevice()
```

##### `ResetPlacementTenancy` <a name="ResetPlacementTenancy" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetPlacementTenancy"></a>

```csharp
private void ResetPlacementTenancy()
```

##### `ResetPreferredType` <a name="ResetPreferredType" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetPreferredType"></a>

```csharp
private void ResetPreferredType()
```

##### `ResetPreferredTypes` <a name="ResetPreferredTypes" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetPreferredTypes"></a>

```csharp
private void ResetPreferredTypes()
```

##### `ResetPrivateIp` <a name="ResetPrivateIp" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetPrivateIp"></a>

```csharp
private void ResetPrivateIp()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetResourceRequirements` <a name="ResetResourceRequirements" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetResourceRequirements"></a>

```csharp
private void ResetResourceRequirements()
```

##### `ResetResourceTagSpecification` <a name="ResetResourceTagSpecification" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetResourceTagSpecification"></a>

```csharp
private void ResetResourceTagSpecification()
```

##### `ResetRevertToSpot` <a name="ResetRevertToSpot" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetRevertToSpot"></a>

```csharp
private void ResetRevertToSpot()
```

##### `ResetScheduledTask` <a name="ResetScheduledTask" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetScheduledTask"></a>

```csharp
private void ResetScheduledTask()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetShutdownScript` <a name="ResetShutdownScript" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetShutdownScript"></a>

```csharp
private void ResetShutdownScript()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetUnhealthyDuration` <a name="ResetUnhealthyDuration" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetUnhealthyDuration"></a>

```csharp
private void ResetUnhealthyDuration()
```

##### `ResetUserData` <a name="ResetUserData" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetUserData"></a>

```csharp
private void ResetUserData()
```

##### `ResetUtilizeReservedInstances` <a name="ResetUtilizeReservedInstances" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.resetUtilizeReservedInstances"></a>

```csharp
private void ResetUtilizeReservedInstances()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ManagedInstanceAws resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

ManagedInstanceAws.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

ManagedInstanceAws.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

ManagedInstanceAws.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

ManagedInstanceAws.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ManagedInstanceAws resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ManagedInstanceAws to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ManagedInstanceAws that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ManagedInstanceAws to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.blockDeviceMappings">BlockDeviceMappings</a></code> | <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsList">ManagedInstanceAwsBlockDeviceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.delete">Delete</a></code> | <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteList">ManagedInstanceAwsDeleteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.integrationRoute53">IntegrationRoute53</a></code> | <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference">ManagedInstanceAwsIntegrationRoute53OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.loadBalancers">LoadBalancers</a></code> | <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersList">ManagedInstanceAwsLoadBalancersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.managedInstanceAction">ManagedInstanceAction</a></code> | <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference">ManagedInstanceAwsManagedInstanceActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.metadataOptions">MetadataOptions</a></code> | <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference">ManagedInstanceAwsMetadataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.networkInterface">NetworkInterface</a></code> | <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceList">ManagedInstanceAwsNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.resourceRequirements">ResourceRequirements</a></code> | <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsList">ManagedInstanceAwsResourceRequirementsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.resourceTagSpecification">ResourceTagSpecification</a></code> | <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationList">ManagedInstanceAwsResourceTagSpecificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.revertToSpot">RevertToSpot</a></code> | <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference">ManagedInstanceAwsRevertToSpotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.scheduledTask">ScheduledTask</a></code> | <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskList">ManagedInstanceAwsScheduledTaskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsList">ManagedInstanceAwsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.autoHealingInput">AutoHealingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.blockDeviceMappingsInput">BlockDeviceMappingsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.blockDevicesModeInput">BlockDevicesModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.cpuCreditsInput">CpuCreditsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.deleteInput">DeleteInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.drainingTimeoutInput">DrainingTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.ebsOptimizedInput">EbsOptimizedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.elasticIpInput">ElasticIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.enableMonitoringInput">EnableMonitoringInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.fallbackToOndemandInput">FallbackToOndemandInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.gracePeriodInput">GracePeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.healthCheckTypeInput">HealthCheckTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.iamInstanceProfileInput">IamInstanceProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.imageIdInput">ImageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.instanceTypesInput">InstanceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.integrationRoute53Input">IntegrationRoute53Input</a></code> | <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53">ManagedInstanceAwsIntegrationRoute53</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.keyPairInput">KeyPairInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.lifeCycleInput">LifeCycleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.loadBalancersInput">LoadBalancersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.managedInstanceActionInput">ManagedInstanceActionInput</a></code> | <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceAction">ManagedInstanceAwsManagedInstanceAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.metadataOptionsInput">MetadataOptionsInput</a></code> | <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptions">ManagedInstanceAwsMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.minimumInstanceLifetimeInput">MinimumInstanceLifetimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.networkInterfaceInput">NetworkInterfaceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.optimizationWindowsInput">OptimizationWindowsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.orientationInput">OrientationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.persistBlockDevicesInput">PersistBlockDevicesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.persistPrivateIpInput">PersistPrivateIpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.persistRootDeviceInput">PersistRootDeviceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.placementTenancyInput">PlacementTenancyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.preferredTypeInput">PreferredTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.preferredTypesInput">PreferredTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.privateIpInput">PrivateIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.productInput">ProductInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.resourceRequirementsInput">ResourceRequirementsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.resourceTagSpecificationInput">ResourceTagSpecificationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.revertToSpotInput">RevertToSpotInput</a></code> | <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpot">ManagedInstanceAwsRevertToSpot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.scheduledTaskInput">ScheduledTaskInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.shutdownScriptInput">ShutdownScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.tagsInput">TagsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.unhealthyDurationInput">UnhealthyDurationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.userDataInput">UserDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.utilizeReservedInstancesInput">UtilizeReservedInstancesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.autoHealing">AutoHealing</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.blockDevicesMode">BlockDevicesMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.cpuCredits">CpuCredits</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.drainingTimeout">DrainingTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.ebsOptimized">EbsOptimized</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.elasticIp">ElasticIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.enableMonitoring">EnableMonitoring</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.fallbackToOndemand">FallbackToOndemand</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.gracePeriod">GracePeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.healthCheckType">HealthCheckType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.iamInstanceProfile">IamInstanceProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.imageId">ImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.instanceTypes">InstanceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.keyPair">KeyPair</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.lifeCycle">LifeCycle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.minimumInstanceLifetime">MinimumInstanceLifetime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.optimizationWindows">OptimizationWindows</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.orientation">Orientation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.persistBlockDevices">PersistBlockDevices</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.persistPrivateIp">PersistPrivateIp</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.persistRootDevice">PersistRootDevice</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.placementTenancy">PlacementTenancy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.preferredType">PreferredType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.preferredTypes">PreferredTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.privateIp">PrivateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.product">Product</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.shutdownScript">ShutdownScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.unhealthyDuration">UnhealthyDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.userData">UserData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.utilizeReservedInstances">UtilizeReservedInstances</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BlockDeviceMappings`<sup>Required</sup> <a name="BlockDeviceMappings" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.blockDeviceMappings"></a>

```csharp
public ManagedInstanceAwsBlockDeviceMappingsList BlockDeviceMappings { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsList">ManagedInstanceAwsBlockDeviceMappingsList</a>

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.delete"></a>

```csharp
public ManagedInstanceAwsDeleteList Delete { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteList">ManagedInstanceAwsDeleteList</a>

---

##### `IntegrationRoute53`<sup>Required</sup> <a name="IntegrationRoute53" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.integrationRoute53"></a>

```csharp
public ManagedInstanceAwsIntegrationRoute53OutputReference IntegrationRoute53 { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference">ManagedInstanceAwsIntegrationRoute53OutputReference</a>

---

##### `LoadBalancers`<sup>Required</sup> <a name="LoadBalancers" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.loadBalancers"></a>

```csharp
public ManagedInstanceAwsLoadBalancersList LoadBalancers { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersList">ManagedInstanceAwsLoadBalancersList</a>

---

##### `ManagedInstanceAction`<sup>Required</sup> <a name="ManagedInstanceAction" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.managedInstanceAction"></a>

```csharp
public ManagedInstanceAwsManagedInstanceActionOutputReference ManagedInstanceAction { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference">ManagedInstanceAwsManagedInstanceActionOutputReference</a>

---

##### `MetadataOptions`<sup>Required</sup> <a name="MetadataOptions" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.metadataOptions"></a>

```csharp
public ManagedInstanceAwsMetadataOptionsOutputReference MetadataOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference">ManagedInstanceAwsMetadataOptionsOutputReference</a>

---

##### `NetworkInterface`<sup>Required</sup> <a name="NetworkInterface" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.networkInterface"></a>

```csharp
public ManagedInstanceAwsNetworkInterfaceList NetworkInterface { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceList">ManagedInstanceAwsNetworkInterfaceList</a>

---

##### `ResourceRequirements`<sup>Required</sup> <a name="ResourceRequirements" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.resourceRequirements"></a>

```csharp
public ManagedInstanceAwsResourceRequirementsList ResourceRequirements { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsList">ManagedInstanceAwsResourceRequirementsList</a>

---

##### `ResourceTagSpecification`<sup>Required</sup> <a name="ResourceTagSpecification" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.resourceTagSpecification"></a>

```csharp
public ManagedInstanceAwsResourceTagSpecificationList ResourceTagSpecification { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationList">ManagedInstanceAwsResourceTagSpecificationList</a>

---

##### `RevertToSpot`<sup>Required</sup> <a name="RevertToSpot" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.revertToSpot"></a>

```csharp
public ManagedInstanceAwsRevertToSpotOutputReference RevertToSpot { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference">ManagedInstanceAwsRevertToSpotOutputReference</a>

---

##### `ScheduledTask`<sup>Required</sup> <a name="ScheduledTask" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.scheduledTask"></a>

```csharp
public ManagedInstanceAwsScheduledTaskList ScheduledTask { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskList">ManagedInstanceAwsScheduledTaskList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.tags"></a>

```csharp
public ManagedInstanceAwsTagsList Tags { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsList">ManagedInstanceAwsTagsList</a>

---

##### `AutoHealingInput`<sup>Optional</sup> <a name="AutoHealingInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.autoHealingInput"></a>

```csharp
public object AutoHealingInput { get; }
```

- *Type:* object

---

##### `BlockDeviceMappingsInput`<sup>Optional</sup> <a name="BlockDeviceMappingsInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.blockDeviceMappingsInput"></a>

```csharp
public object BlockDeviceMappingsInput { get; }
```

- *Type:* object

---

##### `BlockDevicesModeInput`<sup>Optional</sup> <a name="BlockDevicesModeInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.blockDevicesModeInput"></a>

```csharp
public string BlockDevicesModeInput { get; }
```

- *Type:* string

---

##### `CpuCreditsInput`<sup>Optional</sup> <a name="CpuCreditsInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.cpuCreditsInput"></a>

```csharp
public string CpuCreditsInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.deleteInput"></a>

```csharp
public object DeleteInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DrainingTimeoutInput`<sup>Optional</sup> <a name="DrainingTimeoutInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.drainingTimeoutInput"></a>

```csharp
public double DrainingTimeoutInput { get; }
```

- *Type:* double

---

##### `EbsOptimizedInput`<sup>Optional</sup> <a name="EbsOptimizedInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.ebsOptimizedInput"></a>

```csharp
public object EbsOptimizedInput { get; }
```

- *Type:* object

---

##### `ElasticIpInput`<sup>Optional</sup> <a name="ElasticIpInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.elasticIpInput"></a>

```csharp
public string ElasticIpInput { get; }
```

- *Type:* string

---

##### `EnableMonitoringInput`<sup>Optional</sup> <a name="EnableMonitoringInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.enableMonitoringInput"></a>

```csharp
public object EnableMonitoringInput { get; }
```

- *Type:* object

---

##### `FallbackToOndemandInput`<sup>Optional</sup> <a name="FallbackToOndemandInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.fallbackToOndemandInput"></a>

```csharp
public object FallbackToOndemandInput { get; }
```

- *Type:* object

---

##### `GracePeriodInput`<sup>Optional</sup> <a name="GracePeriodInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.gracePeriodInput"></a>

```csharp
public double GracePeriodInput { get; }
```

- *Type:* double

---

##### `HealthCheckTypeInput`<sup>Optional</sup> <a name="HealthCheckTypeInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.healthCheckTypeInput"></a>

```csharp
public string HealthCheckTypeInput { get; }
```

- *Type:* string

---

##### `IamInstanceProfileInput`<sup>Optional</sup> <a name="IamInstanceProfileInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.iamInstanceProfileInput"></a>

```csharp
public string IamInstanceProfileInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImageIdInput`<sup>Optional</sup> <a name="ImageIdInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.imageIdInput"></a>

```csharp
public string ImageIdInput { get; }
```

- *Type:* string

---

##### `InstanceTypesInput`<sup>Optional</sup> <a name="InstanceTypesInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.instanceTypesInput"></a>

```csharp
public string[] InstanceTypesInput { get; }
```

- *Type:* string[]

---

##### `IntegrationRoute53Input`<sup>Optional</sup> <a name="IntegrationRoute53Input" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.integrationRoute53Input"></a>

```csharp
public ManagedInstanceAwsIntegrationRoute53 IntegrationRoute53Input { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53">ManagedInstanceAwsIntegrationRoute53</a>

---

##### `KeyPairInput`<sup>Optional</sup> <a name="KeyPairInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.keyPairInput"></a>

```csharp
public string KeyPairInput { get; }
```

- *Type:* string

---

##### `LifeCycleInput`<sup>Optional</sup> <a name="LifeCycleInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.lifeCycleInput"></a>

```csharp
public string LifeCycleInput { get; }
```

- *Type:* string

---

##### `LoadBalancersInput`<sup>Optional</sup> <a name="LoadBalancersInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.loadBalancersInput"></a>

```csharp
public object LoadBalancersInput { get; }
```

- *Type:* object

---

##### `ManagedInstanceActionInput`<sup>Optional</sup> <a name="ManagedInstanceActionInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.managedInstanceActionInput"></a>

```csharp
public ManagedInstanceAwsManagedInstanceAction ManagedInstanceActionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceAction">ManagedInstanceAwsManagedInstanceAction</a>

---

##### `MetadataOptionsInput`<sup>Optional</sup> <a name="MetadataOptionsInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.metadataOptionsInput"></a>

```csharp
public ManagedInstanceAwsMetadataOptions MetadataOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptions">ManagedInstanceAwsMetadataOptions</a>

---

##### `MinimumInstanceLifetimeInput`<sup>Optional</sup> <a name="MinimumInstanceLifetimeInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.minimumInstanceLifetimeInput"></a>

```csharp
public double MinimumInstanceLifetimeInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkInterfaceInput`<sup>Optional</sup> <a name="NetworkInterfaceInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.networkInterfaceInput"></a>

```csharp
public object NetworkInterfaceInput { get; }
```

- *Type:* object

---

##### `OptimizationWindowsInput`<sup>Optional</sup> <a name="OptimizationWindowsInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.optimizationWindowsInput"></a>

```csharp
public string[] OptimizationWindowsInput { get; }
```

- *Type:* string[]

---

##### `OrientationInput`<sup>Optional</sup> <a name="OrientationInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.orientationInput"></a>

```csharp
public string OrientationInput { get; }
```

- *Type:* string

---

##### `PersistBlockDevicesInput`<sup>Optional</sup> <a name="PersistBlockDevicesInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.persistBlockDevicesInput"></a>

```csharp
public object PersistBlockDevicesInput { get; }
```

- *Type:* object

---

##### `PersistPrivateIpInput`<sup>Optional</sup> <a name="PersistPrivateIpInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.persistPrivateIpInput"></a>

```csharp
public object PersistPrivateIpInput { get; }
```

- *Type:* object

---

##### `PersistRootDeviceInput`<sup>Optional</sup> <a name="PersistRootDeviceInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.persistRootDeviceInput"></a>

```csharp
public object PersistRootDeviceInput { get; }
```

- *Type:* object

---

##### `PlacementTenancyInput`<sup>Optional</sup> <a name="PlacementTenancyInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.placementTenancyInput"></a>

```csharp
public string PlacementTenancyInput { get; }
```

- *Type:* string

---

##### `PreferredTypeInput`<sup>Optional</sup> <a name="PreferredTypeInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.preferredTypeInput"></a>

```csharp
public string PreferredTypeInput { get; }
```

- *Type:* string

---

##### `PreferredTypesInput`<sup>Optional</sup> <a name="PreferredTypesInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.preferredTypesInput"></a>

```csharp
public string[] PreferredTypesInput { get; }
```

- *Type:* string[]

---

##### `PrivateIpInput`<sup>Optional</sup> <a name="PrivateIpInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.privateIpInput"></a>

```csharp
public string PrivateIpInput { get; }
```

- *Type:* string

---

##### `ProductInput`<sup>Optional</sup> <a name="ProductInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.productInput"></a>

```csharp
public string ProductInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ResourceRequirementsInput`<sup>Optional</sup> <a name="ResourceRequirementsInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.resourceRequirementsInput"></a>

```csharp
public object ResourceRequirementsInput { get; }
```

- *Type:* object

---

##### `ResourceTagSpecificationInput`<sup>Optional</sup> <a name="ResourceTagSpecificationInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.resourceTagSpecificationInput"></a>

```csharp
public object ResourceTagSpecificationInput { get; }
```

- *Type:* object

---

##### `RevertToSpotInput`<sup>Optional</sup> <a name="RevertToSpotInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.revertToSpotInput"></a>

```csharp
public ManagedInstanceAwsRevertToSpot RevertToSpotInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpot">ManagedInstanceAwsRevertToSpot</a>

---

##### `ScheduledTaskInput`<sup>Optional</sup> <a name="ScheduledTaskInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.scheduledTaskInput"></a>

```csharp
public object ScheduledTaskInput { get; }
```

- *Type:* object

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `ShutdownScriptInput`<sup>Optional</sup> <a name="ShutdownScriptInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.shutdownScriptInput"></a>

```csharp
public string ShutdownScriptInput { get; }
```

- *Type:* string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.tagsInput"></a>

```csharp
public object TagsInput { get; }
```

- *Type:* object

---

##### `UnhealthyDurationInput`<sup>Optional</sup> <a name="UnhealthyDurationInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.unhealthyDurationInput"></a>

```csharp
public double UnhealthyDurationInput { get; }
```

- *Type:* double

---

##### `UserDataInput`<sup>Optional</sup> <a name="UserDataInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.userDataInput"></a>

```csharp
public string UserDataInput { get; }
```

- *Type:* string

---

##### `UtilizeReservedInstancesInput`<sup>Optional</sup> <a name="UtilizeReservedInstancesInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.utilizeReservedInstancesInput"></a>

```csharp
public object UtilizeReservedInstancesInput { get; }
```

- *Type:* object

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `AutoHealing`<sup>Required</sup> <a name="AutoHealing" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.autoHealing"></a>

```csharp
public object AutoHealing { get; }
```

- *Type:* object

---

##### `BlockDevicesMode`<sup>Required</sup> <a name="BlockDevicesMode" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.blockDevicesMode"></a>

```csharp
public string BlockDevicesMode { get; }
```

- *Type:* string

---

##### `CpuCredits`<sup>Required</sup> <a name="CpuCredits" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.cpuCredits"></a>

```csharp
public string CpuCredits { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DrainingTimeout`<sup>Required</sup> <a name="DrainingTimeout" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.drainingTimeout"></a>

```csharp
public double DrainingTimeout { get; }
```

- *Type:* double

---

##### `EbsOptimized`<sup>Required</sup> <a name="EbsOptimized" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.ebsOptimized"></a>

```csharp
public object EbsOptimized { get; }
```

- *Type:* object

---

##### `ElasticIp`<sup>Required</sup> <a name="ElasticIp" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.elasticIp"></a>

```csharp
public string ElasticIp { get; }
```

- *Type:* string

---

##### `EnableMonitoring`<sup>Required</sup> <a name="EnableMonitoring" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.enableMonitoring"></a>

```csharp
public object EnableMonitoring { get; }
```

- *Type:* object

---

##### `FallbackToOndemand`<sup>Required</sup> <a name="FallbackToOndemand" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.fallbackToOndemand"></a>

```csharp
public object FallbackToOndemand { get; }
```

- *Type:* object

---

##### `GracePeriod`<sup>Required</sup> <a name="GracePeriod" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.gracePeriod"></a>

```csharp
public double GracePeriod { get; }
```

- *Type:* double

---

##### `HealthCheckType`<sup>Required</sup> <a name="HealthCheckType" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.healthCheckType"></a>

```csharp
public string HealthCheckType { get; }
```

- *Type:* string

---

##### `IamInstanceProfile`<sup>Required</sup> <a name="IamInstanceProfile" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.iamInstanceProfile"></a>

```csharp
public string IamInstanceProfile { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.imageId"></a>

```csharp
public string ImageId { get; }
```

- *Type:* string

---

##### `InstanceTypes`<sup>Required</sup> <a name="InstanceTypes" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.instanceTypes"></a>

```csharp
public string[] InstanceTypes { get; }
```

- *Type:* string[]

---

##### `KeyPair`<sup>Required</sup> <a name="KeyPair" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.keyPair"></a>

```csharp
public string KeyPair { get; }
```

- *Type:* string

---

##### `LifeCycle`<sup>Required</sup> <a name="LifeCycle" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.lifeCycle"></a>

```csharp
public string LifeCycle { get; }
```

- *Type:* string

---

##### `MinimumInstanceLifetime`<sup>Required</sup> <a name="MinimumInstanceLifetime" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.minimumInstanceLifetime"></a>

```csharp
public double MinimumInstanceLifetime { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OptimizationWindows`<sup>Required</sup> <a name="OptimizationWindows" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.optimizationWindows"></a>

```csharp
public string[] OptimizationWindows { get; }
```

- *Type:* string[]

---

##### `Orientation`<sup>Required</sup> <a name="Orientation" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.orientation"></a>

```csharp
public string Orientation { get; }
```

- *Type:* string

---

##### `PersistBlockDevices`<sup>Required</sup> <a name="PersistBlockDevices" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.persistBlockDevices"></a>

```csharp
public object PersistBlockDevices { get; }
```

- *Type:* object

---

##### `PersistPrivateIp`<sup>Required</sup> <a name="PersistPrivateIp" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.persistPrivateIp"></a>

```csharp
public object PersistPrivateIp { get; }
```

- *Type:* object

---

##### `PersistRootDevice`<sup>Required</sup> <a name="PersistRootDevice" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.persistRootDevice"></a>

```csharp
public object PersistRootDevice { get; }
```

- *Type:* object

---

##### `PlacementTenancy`<sup>Required</sup> <a name="PlacementTenancy" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.placementTenancy"></a>

```csharp
public string PlacementTenancy { get; }
```

- *Type:* string

---

##### `PreferredType`<sup>Required</sup> <a name="PreferredType" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.preferredType"></a>

```csharp
public string PreferredType { get; }
```

- *Type:* string

---

##### `PreferredTypes`<sup>Required</sup> <a name="PreferredTypes" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.preferredTypes"></a>

```csharp
public string[] PreferredTypes { get; }
```

- *Type:* string[]

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.privateIp"></a>

```csharp
public string PrivateIp { get; }
```

- *Type:* string

---

##### `Product`<sup>Required</sup> <a name="Product" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.product"></a>

```csharp
public string Product { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `ShutdownScript`<sup>Required</sup> <a name="ShutdownScript" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.shutdownScript"></a>

```csharp
public string ShutdownScript { get; }
```

- *Type:* string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `UnhealthyDuration`<sup>Required</sup> <a name="UnhealthyDuration" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.unhealthyDuration"></a>

```csharp
public double UnhealthyDuration { get; }
```

- *Type:* double

---

##### `UserData`<sup>Required</sup> <a name="UserData" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.userData"></a>

```csharp
public string UserData { get; }
```

- *Type:* string

---

##### `UtilizeReservedInstances`<sup>Required</sup> <a name="UtilizeReservedInstances" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.utilizeReservedInstances"></a>

```csharp
public object UtilizeReservedInstances { get; }
```

- *Type:* object

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAws.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedInstanceAwsBlockDeviceMappings <a name="ManagedInstanceAwsBlockDeviceMappings" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ManagedInstanceAwsBlockDeviceMappings {
    string DeviceName,
    ManagedInstanceAwsBlockDeviceMappingsEbs Ebs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappings.property.deviceName">DeviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#device_name ManagedInstanceAws#device_name}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappings.property.ebs">Ebs</a></code> | <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbs">ManagedInstanceAwsBlockDeviceMappingsEbs</a></code> | ebs block. |

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappings.property.deviceName"></a>

```csharp
public string DeviceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#device_name ManagedInstanceAws#device_name}.

---

##### `Ebs`<sup>Optional</sup> <a name="Ebs" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappings.property.ebs"></a>

```csharp
public ManagedInstanceAwsBlockDeviceMappingsEbs Ebs { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbs">ManagedInstanceAwsBlockDeviceMappingsEbs</a>

ebs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#ebs ManagedInstanceAws#ebs}

---

### ManagedInstanceAwsBlockDeviceMappingsEbs <a name="ManagedInstanceAwsBlockDeviceMappingsEbs" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ManagedInstanceAwsBlockDeviceMappingsEbs {
    object DeleteOnTermination = null,
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
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbs.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#delete_on_termination ManagedInstanceAws#delete_on_termination}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbs.property.encrypted">Encrypted</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#encrypted ManagedInstanceAws#encrypted}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbs.property.iops">Iops</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#iops ManagedInstanceAws#iops}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbs.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#kms_key_id ManagedInstanceAws#kms_key_id}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbs.property.snapshotId">SnapshotId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#snapshot_id ManagedInstanceAws#snapshot_id}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbs.property.throughput">Throughput</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#throughput ManagedInstanceAws#throughput}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbs.property.volumeSize">VolumeSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#volume_size ManagedInstanceAws#volume_size}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbs.property.volumeType">VolumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#volume_type ManagedInstanceAws#volume_type}. |

---

##### `DeleteOnTermination`<sup>Optional</sup> <a name="DeleteOnTermination" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbs.property.deleteOnTermination"></a>

```csharp
public object DeleteOnTermination { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#delete_on_termination ManagedInstanceAws#delete_on_termination}.

---

##### `Encrypted`<sup>Optional</sup> <a name="Encrypted" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbs.property.encrypted"></a>

```csharp
public object Encrypted { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#encrypted ManagedInstanceAws#encrypted}.

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbs.property.iops"></a>

```csharp
public double Iops { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#iops ManagedInstanceAws#iops}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbs.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#kms_key_id ManagedInstanceAws#kms_key_id}.

---

##### `SnapshotId`<sup>Optional</sup> <a name="SnapshotId" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbs.property.snapshotId"></a>

```csharp
public string SnapshotId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#snapshot_id ManagedInstanceAws#snapshot_id}.

---

##### `Throughput`<sup>Optional</sup> <a name="Throughput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbs.property.throughput"></a>

```csharp
public double Throughput { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#throughput ManagedInstanceAws#throughput}.

---

##### `VolumeSize`<sup>Optional</sup> <a name="VolumeSize" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbs.property.volumeSize"></a>

```csharp
public double VolumeSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#volume_size ManagedInstanceAws#volume_size}.

---

##### `VolumeType`<sup>Optional</sup> <a name="VolumeType" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbs.property.volumeType"></a>

```csharp
public string VolumeType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#volume_type ManagedInstanceAws#volume_type}.

---

### ManagedInstanceAwsConfig <a name="ManagedInstanceAwsConfig" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ManagedInstanceAwsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ImageId,
    string Name,
    object PersistBlockDevices,
    string Product,
    string[] SubnetIds,
    string VpcId,
    object AutoHealing = null,
    object BlockDeviceMappings = null,
    string BlockDevicesMode = null,
    string CpuCredits = null,
    object Delete = null,
    string Description = null,
    double DrainingTimeout = null,
    object EbsOptimized = null,
    string ElasticIp = null,
    object EnableMonitoring = null,
    object FallbackToOndemand = null,
    double GracePeriod = null,
    string HealthCheckType = null,
    string IamInstanceProfile = null,
    string Id = null,
    string[] InstanceTypes = null,
    ManagedInstanceAwsIntegrationRoute53 IntegrationRoute53 = null,
    string KeyPair = null,
    string LifeCycle = null,
    object LoadBalancers = null,
    ManagedInstanceAwsManagedInstanceAction ManagedInstanceAction = null,
    ManagedInstanceAwsMetadataOptions MetadataOptions = null,
    double MinimumInstanceLifetime = null,
    object NetworkInterface = null,
    string[] OptimizationWindows = null,
    string Orientation = null,
    object PersistPrivateIp = null,
    object PersistRootDevice = null,
    string PlacementTenancy = null,
    string PreferredType = null,
    string[] PreferredTypes = null,
    string PrivateIp = null,
    string Region = null,
    object ResourceRequirements = null,
    object ResourceTagSpecification = null,
    ManagedInstanceAwsRevertToSpot RevertToSpot = null,
    object ScheduledTask = null,
    string[] SecurityGroupIds = null,
    string ShutdownScript = null,
    object Tags = null,
    double UnhealthyDuration = null,
    string UserData = null,
    object UtilizeReservedInstances = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.imageId">ImageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#image_id ManagedInstanceAws#image_id}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#name ManagedInstanceAws#name}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.persistBlockDevices">PersistBlockDevices</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#persist_block_devices ManagedInstanceAws#persist_block_devices}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.product">Product</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#product ManagedInstanceAws#product}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#subnet_ids ManagedInstanceAws#subnet_ids}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.vpcId">VpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#vpc_id ManagedInstanceAws#vpc_id}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.autoHealing">AutoHealing</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#auto_healing ManagedInstanceAws#auto_healing}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.blockDeviceMappings">BlockDeviceMappings</a></code> | <code>object</code> | block_device_mappings block. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.blockDevicesMode">BlockDevicesMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#block_devices_mode ManagedInstanceAws#block_devices_mode}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.cpuCredits">CpuCredits</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#cpu_credits ManagedInstanceAws#cpu_credits}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.delete">Delete</a></code> | <code>object</code> | delete block. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#description ManagedInstanceAws#description}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.drainingTimeout">DrainingTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#draining_timeout ManagedInstanceAws#draining_timeout}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.ebsOptimized">EbsOptimized</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#ebs_optimized ManagedInstanceAws#ebs_optimized}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.elasticIp">ElasticIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#elastic_ip ManagedInstanceAws#elastic_ip}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.enableMonitoring">EnableMonitoring</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#enable_monitoring ManagedInstanceAws#enable_monitoring}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.fallbackToOndemand">FallbackToOndemand</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#fallback_to_ondemand ManagedInstanceAws#fallback_to_ondemand}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.gracePeriod">GracePeriod</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#grace_period ManagedInstanceAws#grace_period}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.healthCheckType">HealthCheckType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#health_check_type ManagedInstanceAws#health_check_type}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.iamInstanceProfile">IamInstanceProfile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#iam_instance_profile ManagedInstanceAws#iam_instance_profile}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#id ManagedInstanceAws#id}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.instanceTypes">InstanceTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#instance_types ManagedInstanceAws#instance_types}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.integrationRoute53">IntegrationRoute53</a></code> | <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53">ManagedInstanceAwsIntegrationRoute53</a></code> | integration_route53 block. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.keyPair">KeyPair</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#key_pair ManagedInstanceAws#key_pair}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.lifeCycle">LifeCycle</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#life_cycle ManagedInstanceAws#life_cycle}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.loadBalancers">LoadBalancers</a></code> | <code>object</code> | load_balancers block. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.managedInstanceAction">ManagedInstanceAction</a></code> | <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceAction">ManagedInstanceAwsManagedInstanceAction</a></code> | managed_instance_action block. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.metadataOptions">MetadataOptions</a></code> | <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptions">ManagedInstanceAwsMetadataOptions</a></code> | metadata_options block. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.minimumInstanceLifetime">MinimumInstanceLifetime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#minimum_instance_lifetime ManagedInstanceAws#minimum_instance_lifetime}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.networkInterface">NetworkInterface</a></code> | <code>object</code> | network_interface block. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.optimizationWindows">OptimizationWindows</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#optimization_windows ManagedInstanceAws#optimization_windows}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.orientation">Orientation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#orientation ManagedInstanceAws#orientation}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.persistPrivateIp">PersistPrivateIp</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#persist_private_ip ManagedInstanceAws#persist_private_ip}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.persistRootDevice">PersistRootDevice</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#persist_root_device ManagedInstanceAws#persist_root_device}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.placementTenancy">PlacementTenancy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#placement_tenancy ManagedInstanceAws#placement_tenancy}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.preferredType">PreferredType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#preferred_type ManagedInstanceAws#preferred_type}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.preferredTypes">PreferredTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#preferred_types ManagedInstanceAws#preferred_types}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.privateIp">PrivateIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#private_ip ManagedInstanceAws#private_ip}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#region ManagedInstanceAws#region}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.resourceRequirements">ResourceRequirements</a></code> | <code>object</code> | resource_requirements block. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.resourceTagSpecification">ResourceTagSpecification</a></code> | <code>object</code> | resource_tag_specification block. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.revertToSpot">RevertToSpot</a></code> | <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpot">ManagedInstanceAwsRevertToSpot</a></code> | revert_to_spot block. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.scheduledTask">ScheduledTask</a></code> | <code>object</code> | scheduled_task block. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#security_group_ids ManagedInstanceAws#security_group_ids}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.shutdownScript">ShutdownScript</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#shutdown_script ManagedInstanceAws#shutdown_script}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.tags">Tags</a></code> | <code>object</code> | tags block. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.unhealthyDuration">UnhealthyDuration</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#unhealthy_duration ManagedInstanceAws#unhealthy_duration}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.userData">UserData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#user_data ManagedInstanceAws#user_data}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.utilizeReservedInstances">UtilizeReservedInstances</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#utilize_reserved_instances ManagedInstanceAws#utilize_reserved_instances}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.imageId"></a>

```csharp
public string ImageId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#image_id ManagedInstanceAws#image_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#name ManagedInstanceAws#name}.

---

##### `PersistBlockDevices`<sup>Required</sup> <a name="PersistBlockDevices" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.persistBlockDevices"></a>

```csharp
public object PersistBlockDevices { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#persist_block_devices ManagedInstanceAws#persist_block_devices}.

---

##### `Product`<sup>Required</sup> <a name="Product" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.product"></a>

```csharp
public string Product { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#product ManagedInstanceAws#product}.

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#subnet_ids ManagedInstanceAws#subnet_ids}.

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#vpc_id ManagedInstanceAws#vpc_id}.

---

##### `AutoHealing`<sup>Optional</sup> <a name="AutoHealing" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.autoHealing"></a>

```csharp
public object AutoHealing { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#auto_healing ManagedInstanceAws#auto_healing}.

---

##### `BlockDeviceMappings`<sup>Optional</sup> <a name="BlockDeviceMappings" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.blockDeviceMappings"></a>

```csharp
public object BlockDeviceMappings { get; set; }
```

- *Type:* object

block_device_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#block_device_mappings ManagedInstanceAws#block_device_mappings}

---

##### `BlockDevicesMode`<sup>Optional</sup> <a name="BlockDevicesMode" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.blockDevicesMode"></a>

```csharp
public string BlockDevicesMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#block_devices_mode ManagedInstanceAws#block_devices_mode}.

---

##### `CpuCredits`<sup>Optional</sup> <a name="CpuCredits" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.cpuCredits"></a>

```csharp
public string CpuCredits { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#cpu_credits ManagedInstanceAws#cpu_credits}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.delete"></a>

```csharp
public object Delete { get; set; }
```

- *Type:* object

delete block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#delete ManagedInstanceAws#delete}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#description ManagedInstanceAws#description}.

---

##### `DrainingTimeout`<sup>Optional</sup> <a name="DrainingTimeout" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.drainingTimeout"></a>

```csharp
public double DrainingTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#draining_timeout ManagedInstanceAws#draining_timeout}.

---

##### `EbsOptimized`<sup>Optional</sup> <a name="EbsOptimized" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.ebsOptimized"></a>

```csharp
public object EbsOptimized { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#ebs_optimized ManagedInstanceAws#ebs_optimized}.

---

##### `ElasticIp`<sup>Optional</sup> <a name="ElasticIp" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.elasticIp"></a>

```csharp
public string ElasticIp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#elastic_ip ManagedInstanceAws#elastic_ip}.

---

##### `EnableMonitoring`<sup>Optional</sup> <a name="EnableMonitoring" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.enableMonitoring"></a>

```csharp
public object EnableMonitoring { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#enable_monitoring ManagedInstanceAws#enable_monitoring}.

---

##### `FallbackToOndemand`<sup>Optional</sup> <a name="FallbackToOndemand" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.fallbackToOndemand"></a>

```csharp
public object FallbackToOndemand { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#fallback_to_ondemand ManagedInstanceAws#fallback_to_ondemand}.

---

##### `GracePeriod`<sup>Optional</sup> <a name="GracePeriod" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.gracePeriod"></a>

```csharp
public double GracePeriod { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#grace_period ManagedInstanceAws#grace_period}.

---

##### `HealthCheckType`<sup>Optional</sup> <a name="HealthCheckType" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.healthCheckType"></a>

```csharp
public string HealthCheckType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#health_check_type ManagedInstanceAws#health_check_type}.

---

##### `IamInstanceProfile`<sup>Optional</sup> <a name="IamInstanceProfile" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.iamInstanceProfile"></a>

```csharp
public string IamInstanceProfile { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#iam_instance_profile ManagedInstanceAws#iam_instance_profile}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#id ManagedInstanceAws#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceTypes`<sup>Optional</sup> <a name="InstanceTypes" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.instanceTypes"></a>

```csharp
public string[] InstanceTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#instance_types ManagedInstanceAws#instance_types}.

---

##### `IntegrationRoute53`<sup>Optional</sup> <a name="IntegrationRoute53" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.integrationRoute53"></a>

```csharp
public ManagedInstanceAwsIntegrationRoute53 IntegrationRoute53 { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53">ManagedInstanceAwsIntegrationRoute53</a>

integration_route53 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#integration_route53 ManagedInstanceAws#integration_route53}

---

##### `KeyPair`<sup>Optional</sup> <a name="KeyPair" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.keyPair"></a>

```csharp
public string KeyPair { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#key_pair ManagedInstanceAws#key_pair}.

---

##### `LifeCycle`<sup>Optional</sup> <a name="LifeCycle" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.lifeCycle"></a>

```csharp
public string LifeCycle { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#life_cycle ManagedInstanceAws#life_cycle}.

---

##### `LoadBalancers`<sup>Optional</sup> <a name="LoadBalancers" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.loadBalancers"></a>

```csharp
public object LoadBalancers { get; set; }
```

- *Type:* object

load_balancers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#load_balancers ManagedInstanceAws#load_balancers}

---

##### `ManagedInstanceAction`<sup>Optional</sup> <a name="ManagedInstanceAction" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.managedInstanceAction"></a>

```csharp
public ManagedInstanceAwsManagedInstanceAction ManagedInstanceAction { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceAction">ManagedInstanceAwsManagedInstanceAction</a>

managed_instance_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#managed_instance_action ManagedInstanceAws#managed_instance_action}

---

##### `MetadataOptions`<sup>Optional</sup> <a name="MetadataOptions" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.metadataOptions"></a>

```csharp
public ManagedInstanceAwsMetadataOptions MetadataOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptions">ManagedInstanceAwsMetadataOptions</a>

metadata_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#metadata_options ManagedInstanceAws#metadata_options}

---

##### `MinimumInstanceLifetime`<sup>Optional</sup> <a name="MinimumInstanceLifetime" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.minimumInstanceLifetime"></a>

```csharp
public double MinimumInstanceLifetime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#minimum_instance_lifetime ManagedInstanceAws#minimum_instance_lifetime}.

---

##### `NetworkInterface`<sup>Optional</sup> <a name="NetworkInterface" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.networkInterface"></a>

```csharp
public object NetworkInterface { get; set; }
```

- *Type:* object

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#network_interface ManagedInstanceAws#network_interface}

---

##### `OptimizationWindows`<sup>Optional</sup> <a name="OptimizationWindows" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.optimizationWindows"></a>

```csharp
public string[] OptimizationWindows { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#optimization_windows ManagedInstanceAws#optimization_windows}.

---

##### `Orientation`<sup>Optional</sup> <a name="Orientation" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.orientation"></a>

```csharp
public string Orientation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#orientation ManagedInstanceAws#orientation}.

---

##### `PersistPrivateIp`<sup>Optional</sup> <a name="PersistPrivateIp" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.persistPrivateIp"></a>

```csharp
public object PersistPrivateIp { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#persist_private_ip ManagedInstanceAws#persist_private_ip}.

---

##### `PersistRootDevice`<sup>Optional</sup> <a name="PersistRootDevice" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.persistRootDevice"></a>

```csharp
public object PersistRootDevice { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#persist_root_device ManagedInstanceAws#persist_root_device}.

---

##### `PlacementTenancy`<sup>Optional</sup> <a name="PlacementTenancy" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.placementTenancy"></a>

```csharp
public string PlacementTenancy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#placement_tenancy ManagedInstanceAws#placement_tenancy}.

---

##### `PreferredType`<sup>Optional</sup> <a name="PreferredType" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.preferredType"></a>

```csharp
public string PreferredType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#preferred_type ManagedInstanceAws#preferred_type}.

---

##### `PreferredTypes`<sup>Optional</sup> <a name="PreferredTypes" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.preferredTypes"></a>

```csharp
public string[] PreferredTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#preferred_types ManagedInstanceAws#preferred_types}.

---

##### `PrivateIp`<sup>Optional</sup> <a name="PrivateIp" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.privateIp"></a>

```csharp
public string PrivateIp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#private_ip ManagedInstanceAws#private_ip}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#region ManagedInstanceAws#region}.

---

##### `ResourceRequirements`<sup>Optional</sup> <a name="ResourceRequirements" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.resourceRequirements"></a>

```csharp
public object ResourceRequirements { get; set; }
```

- *Type:* object

resource_requirements block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#resource_requirements ManagedInstanceAws#resource_requirements}

---

##### `ResourceTagSpecification`<sup>Optional</sup> <a name="ResourceTagSpecification" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.resourceTagSpecification"></a>

```csharp
public object ResourceTagSpecification { get; set; }
```

- *Type:* object

resource_tag_specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#resource_tag_specification ManagedInstanceAws#resource_tag_specification}

---

##### `RevertToSpot`<sup>Optional</sup> <a name="RevertToSpot" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.revertToSpot"></a>

```csharp
public ManagedInstanceAwsRevertToSpot RevertToSpot { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpot">ManagedInstanceAwsRevertToSpot</a>

revert_to_spot block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#revert_to_spot ManagedInstanceAws#revert_to_spot}

---

##### `ScheduledTask`<sup>Optional</sup> <a name="ScheduledTask" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.scheduledTask"></a>

```csharp
public object ScheduledTask { get; set; }
```

- *Type:* object

scheduled_task block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#scheduled_task ManagedInstanceAws#scheduled_task}

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#security_group_ids ManagedInstanceAws#security_group_ids}.

---

##### `ShutdownScript`<sup>Optional</sup> <a name="ShutdownScript" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.shutdownScript"></a>

```csharp
public string ShutdownScript { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#shutdown_script ManagedInstanceAws#shutdown_script}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.tags"></a>

```csharp
public object Tags { get; set; }
```

- *Type:* object

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#tags ManagedInstanceAws#tags}

---

##### `UnhealthyDuration`<sup>Optional</sup> <a name="UnhealthyDuration" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.unhealthyDuration"></a>

```csharp
public double UnhealthyDuration { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#unhealthy_duration ManagedInstanceAws#unhealthy_duration}.

---

##### `UserData`<sup>Optional</sup> <a name="UserData" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.userData"></a>

```csharp
public string UserData { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#user_data ManagedInstanceAws#user_data}.

---

##### `UtilizeReservedInstances`<sup>Optional</sup> <a name="UtilizeReservedInstances" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsConfig.property.utilizeReservedInstances"></a>

```csharp
public object UtilizeReservedInstances { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#utilize_reserved_instances ManagedInstanceAws#utilize_reserved_instances}.

---

### ManagedInstanceAwsDelete <a name="ManagedInstanceAwsDelete" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDelete"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDelete.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ManagedInstanceAwsDelete {
    object AmiBackupShouldDeleteImages = null,
    object DeallocationConfigShouldDeleteImages = null,
    object ShouldDeleteNetworkInterfaces = null,
    object ShouldDeleteSnapshots = null,
    object ShouldDeleteVolumes = null,
    object ShouldTerminateInstance = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDelete.property.amiBackupShouldDeleteImages">AmiBackupShouldDeleteImages</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#ami_backup_should_delete_images ManagedInstanceAws#ami_backup_should_delete_images}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDelete.property.deallocationConfigShouldDeleteImages">DeallocationConfigShouldDeleteImages</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#deallocation_config_should_delete_images ManagedInstanceAws#deallocation_config_should_delete_images}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDelete.property.shouldDeleteNetworkInterfaces">ShouldDeleteNetworkInterfaces</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#should_delete_network_interfaces ManagedInstanceAws#should_delete_network_interfaces}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDelete.property.shouldDeleteSnapshots">ShouldDeleteSnapshots</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#should_delete_snapshots ManagedInstanceAws#should_delete_snapshots}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDelete.property.shouldDeleteVolumes">ShouldDeleteVolumes</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#should_delete_volumes ManagedInstanceAws#should_delete_volumes}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDelete.property.shouldTerminateInstance">ShouldTerminateInstance</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#should_terminate_instance ManagedInstanceAws#should_terminate_instance}. |

---

##### `AmiBackupShouldDeleteImages`<sup>Optional</sup> <a name="AmiBackupShouldDeleteImages" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDelete.property.amiBackupShouldDeleteImages"></a>

```csharp
public object AmiBackupShouldDeleteImages { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#ami_backup_should_delete_images ManagedInstanceAws#ami_backup_should_delete_images}.

---

##### `DeallocationConfigShouldDeleteImages`<sup>Optional</sup> <a name="DeallocationConfigShouldDeleteImages" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDelete.property.deallocationConfigShouldDeleteImages"></a>

```csharp
public object DeallocationConfigShouldDeleteImages { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#deallocation_config_should_delete_images ManagedInstanceAws#deallocation_config_should_delete_images}.

---

##### `ShouldDeleteNetworkInterfaces`<sup>Optional</sup> <a name="ShouldDeleteNetworkInterfaces" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDelete.property.shouldDeleteNetworkInterfaces"></a>

```csharp
public object ShouldDeleteNetworkInterfaces { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#should_delete_network_interfaces ManagedInstanceAws#should_delete_network_interfaces}.

---

##### `ShouldDeleteSnapshots`<sup>Optional</sup> <a name="ShouldDeleteSnapshots" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDelete.property.shouldDeleteSnapshots"></a>

```csharp
public object ShouldDeleteSnapshots { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#should_delete_snapshots ManagedInstanceAws#should_delete_snapshots}.

---

##### `ShouldDeleteVolumes`<sup>Optional</sup> <a name="ShouldDeleteVolumes" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDelete.property.shouldDeleteVolumes"></a>

```csharp
public object ShouldDeleteVolumes { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#should_delete_volumes ManagedInstanceAws#should_delete_volumes}.

---

##### `ShouldTerminateInstance`<sup>Optional</sup> <a name="ShouldTerminateInstance" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDelete.property.shouldTerminateInstance"></a>

```csharp
public object ShouldTerminateInstance { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#should_terminate_instance ManagedInstanceAws#should_terminate_instance}.

---

### ManagedInstanceAwsIntegrationRoute53 <a name="ManagedInstanceAwsIntegrationRoute53" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ManagedInstanceAwsIntegrationRoute53 {
    object Domains
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53.property.domains">Domains</a></code> | <code>object</code> | domains block. |

---

##### `Domains`<sup>Required</sup> <a name="Domains" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53.property.domains"></a>

```csharp
public object Domains { get; set; }
```

- *Type:* object

domains block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#domains ManagedInstanceAws#domains}

---

### ManagedInstanceAwsIntegrationRoute53Domains <a name="ManagedInstanceAwsIntegrationRoute53Domains" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53Domains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53Domains.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ManagedInstanceAwsIntegrationRoute53Domains {
    string HostedZoneId,
    object RecordSets,
    string RecordSetType = null,
    string SpotinstAcctId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53Domains.property.hostedZoneId">HostedZoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#hosted_zone_id ManagedInstanceAws#hosted_zone_id}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53Domains.property.recordSets">RecordSets</a></code> | <code>object</code> | record_sets block. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53Domains.property.recordSetType">RecordSetType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#record_set_type ManagedInstanceAws#record_set_type}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53Domains.property.spotinstAcctId">SpotinstAcctId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#spotinst_acct_id ManagedInstanceAws#spotinst_acct_id}. |

---

##### `HostedZoneId`<sup>Required</sup> <a name="HostedZoneId" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53Domains.property.hostedZoneId"></a>

```csharp
public string HostedZoneId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#hosted_zone_id ManagedInstanceAws#hosted_zone_id}.

---

##### `RecordSets`<sup>Required</sup> <a name="RecordSets" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53Domains.property.recordSets"></a>

```csharp
public object RecordSets { get; set; }
```

- *Type:* object

record_sets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#record_sets ManagedInstanceAws#record_sets}

---

##### `RecordSetType`<sup>Optional</sup> <a name="RecordSetType" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53Domains.property.recordSetType"></a>

```csharp
public string RecordSetType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#record_set_type ManagedInstanceAws#record_set_type}.

---

##### `SpotinstAcctId`<sup>Optional</sup> <a name="SpotinstAcctId" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53Domains.property.spotinstAcctId"></a>

```csharp
public string SpotinstAcctId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#spotinst_acct_id ManagedInstanceAws#spotinst_acct_id}.

---

### ManagedInstanceAwsIntegrationRoute53DomainsRecordSets <a name="ManagedInstanceAwsIntegrationRoute53DomainsRecordSets" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ManagedInstanceAwsIntegrationRoute53DomainsRecordSets {
    string Name,
    object UsePublicDns = null,
    object UsePublicIp = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSets.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#name ManagedInstanceAws#name}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSets.property.usePublicDns">UsePublicDns</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#use_public_dns ManagedInstanceAws#use_public_dns}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSets.property.usePublicIp">UsePublicIp</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#use_public_ip ManagedInstanceAws#use_public_ip}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSets.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#name ManagedInstanceAws#name}.

---

##### `UsePublicDns`<sup>Optional</sup> <a name="UsePublicDns" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSets.property.usePublicDns"></a>

```csharp
public object UsePublicDns { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#use_public_dns ManagedInstanceAws#use_public_dns}.

---

##### `UsePublicIp`<sup>Optional</sup> <a name="UsePublicIp" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSets.property.usePublicIp"></a>

```csharp
public object UsePublicIp { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#use_public_ip ManagedInstanceAws#use_public_ip}.

---

### ManagedInstanceAwsLoadBalancers <a name="ManagedInstanceAwsLoadBalancers" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ManagedInstanceAwsLoadBalancers {
    string Type,
    string Arn = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancers.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#type ManagedInstanceAws#type}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancers.property.arn">Arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#arn ManagedInstanceAws#arn}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancers.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#name ManagedInstanceAws#name}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancers.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#type ManagedInstanceAws#type}.

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancers.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#arn ManagedInstanceAws#arn}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancers.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#name ManagedInstanceAws#name}.

---

### ManagedInstanceAwsManagedInstanceAction <a name="ManagedInstanceAwsManagedInstanceAction" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ManagedInstanceAwsManagedInstanceAction {
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceAction.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#type ManagedInstanceAws#type}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceAction.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#type ManagedInstanceAws#type}.

---

### ManagedInstanceAwsMetadataOptions <a name="ManagedInstanceAwsMetadataOptions" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ManagedInstanceAwsMetadataOptions {
    string HttpTokens,
    double HttpPutResponseHopLimit = null,
    string InstanceMetadataTags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptions.property.httpTokens">HttpTokens</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#http_tokens ManagedInstanceAws#http_tokens}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptions.property.httpPutResponseHopLimit">HttpPutResponseHopLimit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#http_put_response_hop_limit ManagedInstanceAws#http_put_response_hop_limit}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptions.property.instanceMetadataTags">InstanceMetadataTags</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#instance_metadata_tags ManagedInstanceAws#instance_metadata_tags}. |

---

##### `HttpTokens`<sup>Required</sup> <a name="HttpTokens" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptions.property.httpTokens"></a>

```csharp
public string HttpTokens { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#http_tokens ManagedInstanceAws#http_tokens}.

---

##### `HttpPutResponseHopLimit`<sup>Optional</sup> <a name="HttpPutResponseHopLimit" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptions.property.httpPutResponseHopLimit"></a>

```csharp
public double HttpPutResponseHopLimit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#http_put_response_hop_limit ManagedInstanceAws#http_put_response_hop_limit}.

---

##### `InstanceMetadataTags`<sup>Optional</sup> <a name="InstanceMetadataTags" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptions.property.instanceMetadataTags"></a>

```csharp
public string InstanceMetadataTags { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#instance_metadata_tags ManagedInstanceAws#instance_metadata_tags}.

---

### ManagedInstanceAwsNetworkInterface <a name="ManagedInstanceAwsNetworkInterface" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterface.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ManagedInstanceAwsNetworkInterface {
    string DeviceIndex,
    object AssociateIpv6Address = null,
    object AssociatePublicIpAddress = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterface.property.deviceIndex">DeviceIndex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#device_index ManagedInstanceAws#device_index}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterface.property.associateIpv6Address">AssociateIpv6Address</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#associate_ipv6_address ManagedInstanceAws#associate_ipv6_address}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterface.property.associatePublicIpAddress">AssociatePublicIpAddress</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#associate_public_ip_address ManagedInstanceAws#associate_public_ip_address}. |

---

##### `DeviceIndex`<sup>Required</sup> <a name="DeviceIndex" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterface.property.deviceIndex"></a>

```csharp
public string DeviceIndex { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#device_index ManagedInstanceAws#device_index}.

---

##### `AssociateIpv6Address`<sup>Optional</sup> <a name="AssociateIpv6Address" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterface.property.associateIpv6Address"></a>

```csharp
public object AssociateIpv6Address { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#associate_ipv6_address ManagedInstanceAws#associate_ipv6_address}.

---

##### `AssociatePublicIpAddress`<sup>Optional</sup> <a name="AssociatePublicIpAddress" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterface.property.associatePublicIpAddress"></a>

```csharp
public object AssociatePublicIpAddress { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#associate_public_ip_address ManagedInstanceAws#associate_public_ip_address}.

---

### ManagedInstanceAwsResourceRequirements <a name="ManagedInstanceAwsResourceRequirements" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirements.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ManagedInstanceAwsResourceRequirements {
    double RequiredMemoryMaximum,
    double RequiredMemoryMinimum,
    double RequiredVcpuMaximum,
    double RequiredVcpuMinimum,
    string[] ExcludedInstanceFamilies = null,
    string[] ExcludedInstanceGenerations = null,
    string[] ExcludedInstanceTypes = null,
    double RequiredGpuMaximum = null,
    double RequiredGpuMinimum = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirements.property.requiredMemoryMaximum">RequiredMemoryMaximum</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#required_memory_maximum ManagedInstanceAws#required_memory_maximum}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirements.property.requiredMemoryMinimum">RequiredMemoryMinimum</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#required_memory_minimum ManagedInstanceAws#required_memory_minimum}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirements.property.requiredVcpuMaximum">RequiredVcpuMaximum</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#required_vcpu_maximum ManagedInstanceAws#required_vcpu_maximum}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirements.property.requiredVcpuMinimum">RequiredVcpuMinimum</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#required_vcpu_minimum ManagedInstanceAws#required_vcpu_minimum}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirements.property.excludedInstanceFamilies">ExcludedInstanceFamilies</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#excluded_instance_families ManagedInstanceAws#excluded_instance_families}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirements.property.excludedInstanceGenerations">ExcludedInstanceGenerations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#excluded_instance_generations ManagedInstanceAws#excluded_instance_generations}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirements.property.excludedInstanceTypes">ExcludedInstanceTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#excluded_instance_types ManagedInstanceAws#excluded_instance_types}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirements.property.requiredGpuMaximum">RequiredGpuMaximum</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#required_gpu_maximum ManagedInstanceAws#required_gpu_maximum}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirements.property.requiredGpuMinimum">RequiredGpuMinimum</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#required_gpu_minimum ManagedInstanceAws#required_gpu_minimum}. |

---

##### `RequiredMemoryMaximum`<sup>Required</sup> <a name="RequiredMemoryMaximum" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirements.property.requiredMemoryMaximum"></a>

```csharp
public double RequiredMemoryMaximum { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#required_memory_maximum ManagedInstanceAws#required_memory_maximum}.

---

##### `RequiredMemoryMinimum`<sup>Required</sup> <a name="RequiredMemoryMinimum" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirements.property.requiredMemoryMinimum"></a>

```csharp
public double RequiredMemoryMinimum { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#required_memory_minimum ManagedInstanceAws#required_memory_minimum}.

---

##### `RequiredVcpuMaximum`<sup>Required</sup> <a name="RequiredVcpuMaximum" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirements.property.requiredVcpuMaximum"></a>

```csharp
public double RequiredVcpuMaximum { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#required_vcpu_maximum ManagedInstanceAws#required_vcpu_maximum}.

---

##### `RequiredVcpuMinimum`<sup>Required</sup> <a name="RequiredVcpuMinimum" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirements.property.requiredVcpuMinimum"></a>

```csharp
public double RequiredVcpuMinimum { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#required_vcpu_minimum ManagedInstanceAws#required_vcpu_minimum}.

---

##### `ExcludedInstanceFamilies`<sup>Optional</sup> <a name="ExcludedInstanceFamilies" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirements.property.excludedInstanceFamilies"></a>

```csharp
public string[] ExcludedInstanceFamilies { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#excluded_instance_families ManagedInstanceAws#excluded_instance_families}.

---

##### `ExcludedInstanceGenerations`<sup>Optional</sup> <a name="ExcludedInstanceGenerations" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirements.property.excludedInstanceGenerations"></a>

```csharp
public string[] ExcludedInstanceGenerations { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#excluded_instance_generations ManagedInstanceAws#excluded_instance_generations}.

---

##### `ExcludedInstanceTypes`<sup>Optional</sup> <a name="ExcludedInstanceTypes" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirements.property.excludedInstanceTypes"></a>

```csharp
public string[] ExcludedInstanceTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#excluded_instance_types ManagedInstanceAws#excluded_instance_types}.

---

##### `RequiredGpuMaximum`<sup>Optional</sup> <a name="RequiredGpuMaximum" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirements.property.requiredGpuMaximum"></a>

```csharp
public double RequiredGpuMaximum { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#required_gpu_maximum ManagedInstanceAws#required_gpu_maximum}.

---

##### `RequiredGpuMinimum`<sup>Optional</sup> <a name="RequiredGpuMinimum" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirements.property.requiredGpuMinimum"></a>

```csharp
public double RequiredGpuMinimum { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#required_gpu_minimum ManagedInstanceAws#required_gpu_minimum}.

---

### ManagedInstanceAwsResourceTagSpecification <a name="ManagedInstanceAwsResourceTagSpecification" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecification.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ManagedInstanceAwsResourceTagSpecification {
    object ShouldTagAmis = null,
    object ShouldTagEnis = null,
    object ShouldTagSnapshots = null,
    object ShouldTagVolumes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecification.property.shouldTagAmis">ShouldTagAmis</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#should_tag_amis ManagedInstanceAws#should_tag_amis}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecification.property.shouldTagEnis">ShouldTagEnis</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#should_tag_enis ManagedInstanceAws#should_tag_enis}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecification.property.shouldTagSnapshots">ShouldTagSnapshots</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#should_tag_snapshots ManagedInstanceAws#should_tag_snapshots}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecification.property.shouldTagVolumes">ShouldTagVolumes</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#should_tag_volumes ManagedInstanceAws#should_tag_volumes}. |

---

##### `ShouldTagAmis`<sup>Optional</sup> <a name="ShouldTagAmis" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecification.property.shouldTagAmis"></a>

```csharp
public object ShouldTagAmis { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#should_tag_amis ManagedInstanceAws#should_tag_amis}.

---

##### `ShouldTagEnis`<sup>Optional</sup> <a name="ShouldTagEnis" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecification.property.shouldTagEnis"></a>

```csharp
public object ShouldTagEnis { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#should_tag_enis ManagedInstanceAws#should_tag_enis}.

---

##### `ShouldTagSnapshots`<sup>Optional</sup> <a name="ShouldTagSnapshots" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecification.property.shouldTagSnapshots"></a>

```csharp
public object ShouldTagSnapshots { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#should_tag_snapshots ManagedInstanceAws#should_tag_snapshots}.

---

##### `ShouldTagVolumes`<sup>Optional</sup> <a name="ShouldTagVolumes" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecification.property.shouldTagVolumes"></a>

```csharp
public object ShouldTagVolumes { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#should_tag_volumes ManagedInstanceAws#should_tag_volumes}.

---

### ManagedInstanceAwsRevertToSpot <a name="ManagedInstanceAwsRevertToSpot" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpot.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ManagedInstanceAwsRevertToSpot {
    string PerformAt
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpot.property.performAt">PerformAt</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#perform_at ManagedInstanceAws#perform_at}. |

---

##### `PerformAt`<sup>Required</sup> <a name="PerformAt" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpot.property.performAt"></a>

```csharp
public string PerformAt { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#perform_at ManagedInstanceAws#perform_at}.

---

### ManagedInstanceAwsScheduledTask <a name="ManagedInstanceAwsScheduledTask" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTask.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ManagedInstanceAwsScheduledTask {
    string TaskType,
    string CronExpression = null,
    string Frequency = null,
    object IsEnabled = null,
    string StartTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTask.property.taskType">TaskType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#task_type ManagedInstanceAws#task_type}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTask.property.cronExpression">CronExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#cron_expression ManagedInstanceAws#cron_expression}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTask.property.frequency">Frequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#frequency ManagedInstanceAws#frequency}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTask.property.isEnabled">IsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#is_enabled ManagedInstanceAws#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTask.property.startTime">StartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#start_time ManagedInstanceAws#start_time}. |

---

##### `TaskType`<sup>Required</sup> <a name="TaskType" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTask.property.taskType"></a>

```csharp
public string TaskType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#task_type ManagedInstanceAws#task_type}.

---

##### `CronExpression`<sup>Optional</sup> <a name="CronExpression" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTask.property.cronExpression"></a>

```csharp
public string CronExpression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#cron_expression ManagedInstanceAws#cron_expression}.

---

##### `Frequency`<sup>Optional</sup> <a name="Frequency" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTask.property.frequency"></a>

```csharp
public string Frequency { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#frequency ManagedInstanceAws#frequency}.

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTask.property.isEnabled"></a>

```csharp
public object IsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#is_enabled ManagedInstanceAws#is_enabled}.

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTask.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#start_time ManagedInstanceAws#start_time}.

---

### ManagedInstanceAwsTags <a name="ManagedInstanceAwsTags" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ManagedInstanceAwsTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#key ManagedInstanceAws#key}. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#value ManagedInstanceAws#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#key ManagedInstanceAws#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.216.0/docs/resources/managed_instance_aws#value ManagedInstanceAws#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference <a name="ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.resetDeleteOnTermination">ResetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.resetEncrypted">ResetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.resetSnapshotId">ResetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.resetThroughput">ResetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.resetVolumeSize">ResetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.resetVolumeType">ResetVolumeType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeleteOnTermination` <a name="ResetDeleteOnTermination" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.resetDeleteOnTermination"></a>

```csharp
private void ResetDeleteOnTermination()
```

##### `ResetEncrypted` <a name="ResetEncrypted" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.resetEncrypted"></a>

```csharp
private void ResetEncrypted()
```

##### `ResetIops` <a name="ResetIops" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.resetIops"></a>

```csharp
private void ResetIops()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetSnapshotId` <a name="ResetSnapshotId" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.resetSnapshotId"></a>

```csharp
private void ResetSnapshotId()
```

##### `ResetThroughput` <a name="ResetThroughput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.resetThroughput"></a>

```csharp
private void ResetThroughput()
```

##### `ResetVolumeSize` <a name="ResetVolumeSize" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.resetVolumeSize"></a>

```csharp
private void ResetVolumeSize()
```

##### `ResetVolumeType` <a name="ResetVolumeType" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.resetVolumeType"></a>

```csharp
private void ResetVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.deleteOnTerminationInput">DeleteOnTerminationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.encryptedInput">EncryptedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.iopsInput">IopsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.snapshotIdInput">SnapshotIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.throughputInput">ThroughputInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput">VolumeSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput">VolumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.encrypted">Encrypted</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.iops">Iops</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.snapshotId">SnapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.throughput">Throughput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.volumeSize">VolumeSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.volumeType">VolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbs">ManagedInstanceAwsBlockDeviceMappingsEbs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeleteOnTerminationInput`<sup>Optional</sup> <a name="DeleteOnTerminationInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.deleteOnTerminationInput"></a>

```csharp
public object DeleteOnTerminationInput { get; }
```

- *Type:* object

---

##### `EncryptedInput`<sup>Optional</sup> <a name="EncryptedInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.encryptedInput"></a>

```csharp
public object EncryptedInput { get; }
```

- *Type:* object

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.iopsInput"></a>

```csharp
public double IopsInput { get; }
```

- *Type:* double

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `SnapshotIdInput`<sup>Optional</sup> <a name="SnapshotIdInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.snapshotIdInput"></a>

```csharp
public string SnapshotIdInput { get; }
```

- *Type:* string

---

##### `ThroughputInput`<sup>Optional</sup> <a name="ThroughputInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.throughputInput"></a>

```csharp
public double ThroughputInput { get; }
```

- *Type:* double

---

##### `VolumeSizeInput`<sup>Optional</sup> <a name="VolumeSizeInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput"></a>

```csharp
public double VolumeSizeInput { get; }
```

- *Type:* double

---

##### `VolumeTypeInput`<sup>Optional</sup> <a name="VolumeTypeInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput"></a>

```csharp
public string VolumeTypeInput { get; }
```

- *Type:* string

---

##### `DeleteOnTermination`<sup>Required</sup> <a name="DeleteOnTermination" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination"></a>

```csharp
public object DeleteOnTermination { get; }
```

- *Type:* object

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.encrypted"></a>

```csharp
public object Encrypted { get; }
```

- *Type:* object

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.iops"></a>

```csharp
public double Iops { get; }
```

- *Type:* double

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `SnapshotId`<sup>Required</sup> <a name="SnapshotId" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.snapshotId"></a>

```csharp
public string SnapshotId { get; }
```

- *Type:* string

---

##### `Throughput`<sup>Required</sup> <a name="Throughput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.throughput"></a>

```csharp
public double Throughput { get; }
```

- *Type:* double

---

##### `VolumeSize`<sup>Required</sup> <a name="VolumeSize" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.volumeSize"></a>

```csharp
public double VolumeSize { get; }
```

- *Type:* double

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.volumeType"></a>

```csharp
public string VolumeType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference.property.internalValue"></a>

```csharp
public ManagedInstanceAwsBlockDeviceMappingsEbs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbs">ManagedInstanceAwsBlockDeviceMappingsEbs</a>

---


### ManagedInstanceAwsBlockDeviceMappingsList <a name="ManagedInstanceAwsBlockDeviceMappingsList" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ManagedInstanceAwsBlockDeviceMappingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsList.get"></a>

```csharp
private ManagedInstanceAwsBlockDeviceMappingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ManagedInstanceAwsBlockDeviceMappingsOutputReference <a name="ManagedInstanceAwsBlockDeviceMappingsOutputReference" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ManagedInstanceAwsBlockDeviceMappingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.putEbs">PutEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.resetEbs">ResetEbs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEbs` <a name="PutEbs" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.putEbs"></a>

```csharp
private void PutEbs(ManagedInstanceAwsBlockDeviceMappingsEbs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.putEbs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbs">ManagedInstanceAwsBlockDeviceMappingsEbs</a>

---

##### `ResetEbs` <a name="ResetEbs" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.resetEbs"></a>

```csharp
private void ResetEbs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.property.ebs">Ebs</a></code> | <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference">ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.property.deviceNameInput">DeviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.property.ebsInput">EbsInput</a></code> | <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbs">ManagedInstanceAwsBlockDeviceMappingsEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.property.deviceName">DeviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ebs`<sup>Required</sup> <a name="Ebs" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.property.ebs"></a>

```csharp
public ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference Ebs { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference">ManagedInstanceAwsBlockDeviceMappingsEbsOutputReference</a>

---

##### `DeviceNameInput`<sup>Optional</sup> <a name="DeviceNameInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.property.deviceNameInput"></a>

```csharp
public string DeviceNameInput { get; }
```

- *Type:* string

---

##### `EbsInput`<sup>Optional</sup> <a name="EbsInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.property.ebsInput"></a>

```csharp
public ManagedInstanceAwsBlockDeviceMappingsEbs EbsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsEbs">ManagedInstanceAwsBlockDeviceMappingsEbs</a>

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.property.deviceName"></a>

```csharp
public string DeviceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsBlockDeviceMappingsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ManagedInstanceAwsDeleteList <a name="ManagedInstanceAwsDeleteList" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ManagedInstanceAwsDeleteList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteList.get"></a>

```csharp
private ManagedInstanceAwsDeleteOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ManagedInstanceAwsDeleteOutputReference <a name="ManagedInstanceAwsDeleteOutputReference" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ManagedInstanceAwsDeleteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.resetAmiBackupShouldDeleteImages">ResetAmiBackupShouldDeleteImages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.resetDeallocationConfigShouldDeleteImages">ResetDeallocationConfigShouldDeleteImages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.resetShouldDeleteNetworkInterfaces">ResetShouldDeleteNetworkInterfaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.resetShouldDeleteSnapshots">ResetShouldDeleteSnapshots</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.resetShouldDeleteVolumes">ResetShouldDeleteVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.resetShouldTerminateInstance">ResetShouldTerminateInstance</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAmiBackupShouldDeleteImages` <a name="ResetAmiBackupShouldDeleteImages" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.resetAmiBackupShouldDeleteImages"></a>

```csharp
private void ResetAmiBackupShouldDeleteImages()
```

##### `ResetDeallocationConfigShouldDeleteImages` <a name="ResetDeallocationConfigShouldDeleteImages" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.resetDeallocationConfigShouldDeleteImages"></a>

```csharp
private void ResetDeallocationConfigShouldDeleteImages()
```

##### `ResetShouldDeleteNetworkInterfaces` <a name="ResetShouldDeleteNetworkInterfaces" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.resetShouldDeleteNetworkInterfaces"></a>

```csharp
private void ResetShouldDeleteNetworkInterfaces()
```

##### `ResetShouldDeleteSnapshots` <a name="ResetShouldDeleteSnapshots" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.resetShouldDeleteSnapshots"></a>

```csharp
private void ResetShouldDeleteSnapshots()
```

##### `ResetShouldDeleteVolumes` <a name="ResetShouldDeleteVolumes" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.resetShouldDeleteVolumes"></a>

```csharp
private void ResetShouldDeleteVolumes()
```

##### `ResetShouldTerminateInstance` <a name="ResetShouldTerminateInstance" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.resetShouldTerminateInstance"></a>

```csharp
private void ResetShouldTerminateInstance()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.property.amiBackupShouldDeleteImagesInput">AmiBackupShouldDeleteImagesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.property.deallocationConfigShouldDeleteImagesInput">DeallocationConfigShouldDeleteImagesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.property.shouldDeleteNetworkInterfacesInput">ShouldDeleteNetworkInterfacesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.property.shouldDeleteSnapshotsInput">ShouldDeleteSnapshotsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.property.shouldDeleteVolumesInput">ShouldDeleteVolumesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.property.shouldTerminateInstanceInput">ShouldTerminateInstanceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.property.amiBackupShouldDeleteImages">AmiBackupShouldDeleteImages</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.property.deallocationConfigShouldDeleteImages">DeallocationConfigShouldDeleteImages</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.property.shouldDeleteNetworkInterfaces">ShouldDeleteNetworkInterfaces</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.property.shouldDeleteSnapshots">ShouldDeleteSnapshots</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.property.shouldDeleteVolumes">ShouldDeleteVolumes</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.property.shouldTerminateInstance">ShouldTerminateInstance</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AmiBackupShouldDeleteImagesInput`<sup>Optional</sup> <a name="AmiBackupShouldDeleteImagesInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.property.amiBackupShouldDeleteImagesInput"></a>

```csharp
public object AmiBackupShouldDeleteImagesInput { get; }
```

- *Type:* object

---

##### `DeallocationConfigShouldDeleteImagesInput`<sup>Optional</sup> <a name="DeallocationConfigShouldDeleteImagesInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.property.deallocationConfigShouldDeleteImagesInput"></a>

```csharp
public object DeallocationConfigShouldDeleteImagesInput { get; }
```

- *Type:* object

---

##### `ShouldDeleteNetworkInterfacesInput`<sup>Optional</sup> <a name="ShouldDeleteNetworkInterfacesInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.property.shouldDeleteNetworkInterfacesInput"></a>

```csharp
public object ShouldDeleteNetworkInterfacesInput { get; }
```

- *Type:* object

---

##### `ShouldDeleteSnapshotsInput`<sup>Optional</sup> <a name="ShouldDeleteSnapshotsInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.property.shouldDeleteSnapshotsInput"></a>

```csharp
public object ShouldDeleteSnapshotsInput { get; }
```

- *Type:* object

---

##### `ShouldDeleteVolumesInput`<sup>Optional</sup> <a name="ShouldDeleteVolumesInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.property.shouldDeleteVolumesInput"></a>

```csharp
public object ShouldDeleteVolumesInput { get; }
```

- *Type:* object

---

##### `ShouldTerminateInstanceInput`<sup>Optional</sup> <a name="ShouldTerminateInstanceInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.property.shouldTerminateInstanceInput"></a>

```csharp
public object ShouldTerminateInstanceInput { get; }
```

- *Type:* object

---

##### `AmiBackupShouldDeleteImages`<sup>Required</sup> <a name="AmiBackupShouldDeleteImages" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.property.amiBackupShouldDeleteImages"></a>

```csharp
public object AmiBackupShouldDeleteImages { get; }
```

- *Type:* object

---

##### `DeallocationConfigShouldDeleteImages`<sup>Required</sup> <a name="DeallocationConfigShouldDeleteImages" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.property.deallocationConfigShouldDeleteImages"></a>

```csharp
public object DeallocationConfigShouldDeleteImages { get; }
```

- *Type:* object

---

##### `ShouldDeleteNetworkInterfaces`<sup>Required</sup> <a name="ShouldDeleteNetworkInterfaces" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.property.shouldDeleteNetworkInterfaces"></a>

```csharp
public object ShouldDeleteNetworkInterfaces { get; }
```

- *Type:* object

---

##### `ShouldDeleteSnapshots`<sup>Required</sup> <a name="ShouldDeleteSnapshots" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.property.shouldDeleteSnapshots"></a>

```csharp
public object ShouldDeleteSnapshots { get; }
```

- *Type:* object

---

##### `ShouldDeleteVolumes`<sup>Required</sup> <a name="ShouldDeleteVolumes" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.property.shouldDeleteVolumes"></a>

```csharp
public object ShouldDeleteVolumes { get; }
```

- *Type:* object

---

##### `ShouldTerminateInstance`<sup>Required</sup> <a name="ShouldTerminateInstance" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.property.shouldTerminateInstance"></a>

```csharp
public object ShouldTerminateInstance { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsDeleteOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ManagedInstanceAwsIntegrationRoute53DomainsList <a name="ManagedInstanceAwsIntegrationRoute53DomainsList" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ManagedInstanceAwsIntegrationRoute53DomainsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsList.get"></a>

```csharp
private ManagedInstanceAwsIntegrationRoute53DomainsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ManagedInstanceAwsIntegrationRoute53DomainsOutputReference <a name="ManagedInstanceAwsIntegrationRoute53DomainsOutputReference" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ManagedInstanceAwsIntegrationRoute53DomainsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.putRecordSets">PutRecordSets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.resetRecordSetType">ResetRecordSetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.resetSpotinstAcctId">ResetSpotinstAcctId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRecordSets` <a name="PutRecordSets" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.putRecordSets"></a>

```csharp
private void PutRecordSets(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.putRecordSets.parameter.value"></a>

- *Type:* object

---

##### `ResetRecordSetType` <a name="ResetRecordSetType" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.resetRecordSetType"></a>

```csharp
private void ResetRecordSetType()
```

##### `ResetSpotinstAcctId` <a name="ResetSpotinstAcctId" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.resetSpotinstAcctId"></a>

```csharp
private void ResetSpotinstAcctId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.property.recordSets">RecordSets</a></code> | <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList">ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.property.hostedZoneIdInput">HostedZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.property.recordSetsInput">RecordSetsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.property.recordSetTypeInput">RecordSetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.property.spotinstAcctIdInput">SpotinstAcctIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.property.hostedZoneId">HostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.property.recordSetType">RecordSetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.property.spotinstAcctId">SpotinstAcctId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RecordSets`<sup>Required</sup> <a name="RecordSets" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.property.recordSets"></a>

```csharp
public ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList RecordSets { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList">ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList</a>

---

##### `HostedZoneIdInput`<sup>Optional</sup> <a name="HostedZoneIdInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.property.hostedZoneIdInput"></a>

```csharp
public string HostedZoneIdInput { get; }
```

- *Type:* string

---

##### `RecordSetsInput`<sup>Optional</sup> <a name="RecordSetsInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.property.recordSetsInput"></a>

```csharp
public object RecordSetsInput { get; }
```

- *Type:* object

---

##### `RecordSetTypeInput`<sup>Optional</sup> <a name="RecordSetTypeInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.property.recordSetTypeInput"></a>

```csharp
public string RecordSetTypeInput { get; }
```

- *Type:* string

---

##### `SpotinstAcctIdInput`<sup>Optional</sup> <a name="SpotinstAcctIdInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.property.spotinstAcctIdInput"></a>

```csharp
public string SpotinstAcctIdInput { get; }
```

- *Type:* string

---

##### `HostedZoneId`<sup>Required</sup> <a name="HostedZoneId" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.property.hostedZoneId"></a>

```csharp
public string HostedZoneId { get; }
```

- *Type:* string

---

##### `RecordSetType`<sup>Required</sup> <a name="RecordSetType" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.property.recordSetType"></a>

```csharp
public string RecordSetType { get; }
```

- *Type:* string

---

##### `SpotinstAcctId`<sup>Required</sup> <a name="SpotinstAcctId" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.property.spotinstAcctId"></a>

```csharp
public string SpotinstAcctId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList <a name="ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList.get"></a>

```csharp
private ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference <a name="ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.resetUsePublicDns">ResetUsePublicDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.resetUsePublicIp">ResetUsePublicIp</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUsePublicDns` <a name="ResetUsePublicDns" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.resetUsePublicDns"></a>

```csharp
private void ResetUsePublicDns()
```

##### `ResetUsePublicIp` <a name="ResetUsePublicIp" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.resetUsePublicIp"></a>

```csharp
private void ResetUsePublicIp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.property.usePublicDnsInput">UsePublicDnsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.property.usePublicIpInput">UsePublicIpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.property.usePublicDns">UsePublicDns</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.property.usePublicIp">UsePublicIp</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `UsePublicDnsInput`<sup>Optional</sup> <a name="UsePublicDnsInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.property.usePublicDnsInput"></a>

```csharp
public object UsePublicDnsInput { get; }
```

- *Type:* object

---

##### `UsePublicIpInput`<sup>Optional</sup> <a name="UsePublicIpInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.property.usePublicIpInput"></a>

```csharp
public object UsePublicIpInput { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `UsePublicDns`<sup>Required</sup> <a name="UsePublicDns" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.property.usePublicDns"></a>

```csharp
public object UsePublicDns { get; }
```

- *Type:* object

---

##### `UsePublicIp`<sup>Required</sup> <a name="UsePublicIp" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.property.usePublicIp"></a>

```csharp
public object UsePublicIp { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsRecordSetsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ManagedInstanceAwsIntegrationRoute53OutputReference <a name="ManagedInstanceAwsIntegrationRoute53OutputReference" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ManagedInstanceAwsIntegrationRoute53OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.putDomains">PutDomains</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDomains` <a name="PutDomains" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.putDomains"></a>

```csharp
private void PutDomains(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.putDomains.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.property.domains">Domains</a></code> | <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsList">ManagedInstanceAwsIntegrationRoute53DomainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.property.domainsInput">DomainsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53">ManagedInstanceAwsIntegrationRoute53</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Domains`<sup>Required</sup> <a name="Domains" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.property.domains"></a>

```csharp
public ManagedInstanceAwsIntegrationRoute53DomainsList Domains { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53DomainsList">ManagedInstanceAwsIntegrationRoute53DomainsList</a>

---

##### `DomainsInput`<sup>Optional</sup> <a name="DomainsInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.property.domainsInput"></a>

```csharp
public object DomainsInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53OutputReference.property.internalValue"></a>

```csharp
public ManagedInstanceAwsIntegrationRoute53 InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsIntegrationRoute53">ManagedInstanceAwsIntegrationRoute53</a>

---


### ManagedInstanceAwsLoadBalancersList <a name="ManagedInstanceAwsLoadBalancersList" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ManagedInstanceAwsLoadBalancersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersList.get"></a>

```csharp
private ManagedInstanceAwsLoadBalancersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ManagedInstanceAwsLoadBalancersOutputReference <a name="ManagedInstanceAwsLoadBalancersOutputReference" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ManagedInstanceAwsLoadBalancersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.resetArn">ResetArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArn` <a name="ResetArn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.resetArn"></a>

```csharp
private void ResetArn()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsLoadBalancersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ManagedInstanceAwsManagedInstanceActionOutputReference <a name="ManagedInstanceAwsManagedInstanceActionOutputReference" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ManagedInstanceAwsManagedInstanceActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceAction">ManagedInstanceAwsManagedInstanceAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceActionOutputReference.property.internalValue"></a>

```csharp
public ManagedInstanceAwsManagedInstanceAction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsManagedInstanceAction">ManagedInstanceAwsManagedInstanceAction</a>

---


### ManagedInstanceAwsMetadataOptionsOutputReference <a name="ManagedInstanceAwsMetadataOptionsOutputReference" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ManagedInstanceAwsMetadataOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.resetHttpPutResponseHopLimit">ResetHttpPutResponseHopLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.resetInstanceMetadataTags">ResetInstanceMetadataTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHttpPutResponseHopLimit` <a name="ResetHttpPutResponseHopLimit" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.resetHttpPutResponseHopLimit"></a>

```csharp
private void ResetHttpPutResponseHopLimit()
```

##### `ResetInstanceMetadataTags` <a name="ResetInstanceMetadataTags" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.resetInstanceMetadataTags"></a>

```csharp
private void ResetInstanceMetadataTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput">HttpPutResponseHopLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.property.httpTokensInput">HttpTokensInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.property.instanceMetadataTagsInput">InstanceMetadataTagsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.property.httpPutResponseHopLimit">HttpPutResponseHopLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.property.httpTokens">HttpTokens</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.property.instanceMetadataTags">InstanceMetadataTags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptions">ManagedInstanceAwsMetadataOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HttpPutResponseHopLimitInput`<sup>Optional</sup> <a name="HttpPutResponseHopLimitInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput"></a>

```csharp
public double HttpPutResponseHopLimitInput { get; }
```

- *Type:* double

---

##### `HttpTokensInput`<sup>Optional</sup> <a name="HttpTokensInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.property.httpTokensInput"></a>

```csharp
public string HttpTokensInput { get; }
```

- *Type:* string

---

##### `InstanceMetadataTagsInput`<sup>Optional</sup> <a name="InstanceMetadataTagsInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.property.instanceMetadataTagsInput"></a>

```csharp
public string InstanceMetadataTagsInput { get; }
```

- *Type:* string

---

##### `HttpPutResponseHopLimit`<sup>Required</sup> <a name="HttpPutResponseHopLimit" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.property.httpPutResponseHopLimit"></a>

```csharp
public double HttpPutResponseHopLimit { get; }
```

- *Type:* double

---

##### `HttpTokens`<sup>Required</sup> <a name="HttpTokens" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.property.httpTokens"></a>

```csharp
public string HttpTokens { get; }
```

- *Type:* string

---

##### `InstanceMetadataTags`<sup>Required</sup> <a name="InstanceMetadataTags" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.property.instanceMetadataTags"></a>

```csharp
public string InstanceMetadataTags { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptionsOutputReference.property.internalValue"></a>

```csharp
public ManagedInstanceAwsMetadataOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsMetadataOptions">ManagedInstanceAwsMetadataOptions</a>

---


### ManagedInstanceAwsNetworkInterfaceList <a name="ManagedInstanceAwsNetworkInterfaceList" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ManagedInstanceAwsNetworkInterfaceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceList.get"></a>

```csharp
private ManagedInstanceAwsNetworkInterfaceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ManagedInstanceAwsNetworkInterfaceOutputReference <a name="ManagedInstanceAwsNetworkInterfaceOutputReference" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ManagedInstanceAwsNetworkInterfaceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.resetAssociateIpv6Address">ResetAssociateIpv6Address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.resetAssociatePublicIpAddress">ResetAssociatePublicIpAddress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAssociateIpv6Address` <a name="ResetAssociateIpv6Address" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.resetAssociateIpv6Address"></a>

```csharp
private void ResetAssociateIpv6Address()
```

##### `ResetAssociatePublicIpAddress` <a name="ResetAssociatePublicIpAddress" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.resetAssociatePublicIpAddress"></a>

```csharp
private void ResetAssociatePublicIpAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.property.associateIpv6AddressInput">AssociateIpv6AddressInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.property.associatePublicIpAddressInput">AssociatePublicIpAddressInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.property.deviceIndexInput">DeviceIndexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.property.associateIpv6Address">AssociateIpv6Address</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.property.associatePublicIpAddress">AssociatePublicIpAddress</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.property.deviceIndex">DeviceIndex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AssociateIpv6AddressInput`<sup>Optional</sup> <a name="AssociateIpv6AddressInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.property.associateIpv6AddressInput"></a>

```csharp
public object AssociateIpv6AddressInput { get; }
```

- *Type:* object

---

##### `AssociatePublicIpAddressInput`<sup>Optional</sup> <a name="AssociatePublicIpAddressInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.property.associatePublicIpAddressInput"></a>

```csharp
public object AssociatePublicIpAddressInput { get; }
```

- *Type:* object

---

##### `DeviceIndexInput`<sup>Optional</sup> <a name="DeviceIndexInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.property.deviceIndexInput"></a>

```csharp
public string DeviceIndexInput { get; }
```

- *Type:* string

---

##### `AssociateIpv6Address`<sup>Required</sup> <a name="AssociateIpv6Address" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.property.associateIpv6Address"></a>

```csharp
public object AssociateIpv6Address { get; }
```

- *Type:* object

---

##### `AssociatePublicIpAddress`<sup>Required</sup> <a name="AssociatePublicIpAddress" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.property.associatePublicIpAddress"></a>

```csharp
public object AssociatePublicIpAddress { get; }
```

- *Type:* object

---

##### `DeviceIndex`<sup>Required</sup> <a name="DeviceIndex" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.property.deviceIndex"></a>

```csharp
public string DeviceIndex { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsNetworkInterfaceOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ManagedInstanceAwsResourceRequirementsList <a name="ManagedInstanceAwsResourceRequirementsList" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ManagedInstanceAwsResourceRequirementsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsList.get"></a>

```csharp
private ManagedInstanceAwsResourceRequirementsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ManagedInstanceAwsResourceRequirementsOutputReference <a name="ManagedInstanceAwsResourceRequirementsOutputReference" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ManagedInstanceAwsResourceRequirementsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.resetExcludedInstanceFamilies">ResetExcludedInstanceFamilies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.resetExcludedInstanceGenerations">ResetExcludedInstanceGenerations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.resetExcludedInstanceTypes">ResetExcludedInstanceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.resetRequiredGpuMaximum">ResetRequiredGpuMaximum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.resetRequiredGpuMinimum">ResetRequiredGpuMinimum</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludedInstanceFamilies` <a name="ResetExcludedInstanceFamilies" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.resetExcludedInstanceFamilies"></a>

```csharp
private void ResetExcludedInstanceFamilies()
```

##### `ResetExcludedInstanceGenerations` <a name="ResetExcludedInstanceGenerations" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.resetExcludedInstanceGenerations"></a>

```csharp
private void ResetExcludedInstanceGenerations()
```

##### `ResetExcludedInstanceTypes` <a name="ResetExcludedInstanceTypes" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.resetExcludedInstanceTypes"></a>

```csharp
private void ResetExcludedInstanceTypes()
```

##### `ResetRequiredGpuMaximum` <a name="ResetRequiredGpuMaximum" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.resetRequiredGpuMaximum"></a>

```csharp
private void ResetRequiredGpuMaximum()
```

##### `ResetRequiredGpuMinimum` <a name="ResetRequiredGpuMinimum" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.resetRequiredGpuMinimum"></a>

```csharp
private void ResetRequiredGpuMinimum()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.property.excludedInstanceFamiliesInput">ExcludedInstanceFamiliesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.property.excludedInstanceGenerationsInput">ExcludedInstanceGenerationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.property.excludedInstanceTypesInput">ExcludedInstanceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.property.requiredGpuMaximumInput">RequiredGpuMaximumInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.property.requiredGpuMinimumInput">RequiredGpuMinimumInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.property.requiredMemoryMaximumInput">RequiredMemoryMaximumInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.property.requiredMemoryMinimumInput">RequiredMemoryMinimumInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.property.requiredVcpuMaximumInput">RequiredVcpuMaximumInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.property.requiredVcpuMinimumInput">RequiredVcpuMinimumInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.property.excludedInstanceFamilies">ExcludedInstanceFamilies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.property.excludedInstanceGenerations">ExcludedInstanceGenerations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.property.excludedInstanceTypes">ExcludedInstanceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.property.requiredGpuMaximum">RequiredGpuMaximum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.property.requiredGpuMinimum">RequiredGpuMinimum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.property.requiredMemoryMaximum">RequiredMemoryMaximum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.property.requiredMemoryMinimum">RequiredMemoryMinimum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.property.requiredVcpuMaximum">RequiredVcpuMaximum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.property.requiredVcpuMinimum">RequiredVcpuMinimum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExcludedInstanceFamiliesInput`<sup>Optional</sup> <a name="ExcludedInstanceFamiliesInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.property.excludedInstanceFamiliesInput"></a>

```csharp
public string[] ExcludedInstanceFamiliesInput { get; }
```

- *Type:* string[]

---

##### `ExcludedInstanceGenerationsInput`<sup>Optional</sup> <a name="ExcludedInstanceGenerationsInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.property.excludedInstanceGenerationsInput"></a>

```csharp
public string[] ExcludedInstanceGenerationsInput { get; }
```

- *Type:* string[]

---

##### `ExcludedInstanceTypesInput`<sup>Optional</sup> <a name="ExcludedInstanceTypesInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.property.excludedInstanceTypesInput"></a>

```csharp
public string[] ExcludedInstanceTypesInput { get; }
```

- *Type:* string[]

---

##### `RequiredGpuMaximumInput`<sup>Optional</sup> <a name="RequiredGpuMaximumInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.property.requiredGpuMaximumInput"></a>

```csharp
public double RequiredGpuMaximumInput { get; }
```

- *Type:* double

---

##### `RequiredGpuMinimumInput`<sup>Optional</sup> <a name="RequiredGpuMinimumInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.property.requiredGpuMinimumInput"></a>

```csharp
public double RequiredGpuMinimumInput { get; }
```

- *Type:* double

---

##### `RequiredMemoryMaximumInput`<sup>Optional</sup> <a name="RequiredMemoryMaximumInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.property.requiredMemoryMaximumInput"></a>

```csharp
public double RequiredMemoryMaximumInput { get; }
```

- *Type:* double

---

##### `RequiredMemoryMinimumInput`<sup>Optional</sup> <a name="RequiredMemoryMinimumInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.property.requiredMemoryMinimumInput"></a>

```csharp
public double RequiredMemoryMinimumInput { get; }
```

- *Type:* double

---

##### `RequiredVcpuMaximumInput`<sup>Optional</sup> <a name="RequiredVcpuMaximumInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.property.requiredVcpuMaximumInput"></a>

```csharp
public double RequiredVcpuMaximumInput { get; }
```

- *Type:* double

---

##### `RequiredVcpuMinimumInput`<sup>Optional</sup> <a name="RequiredVcpuMinimumInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.property.requiredVcpuMinimumInput"></a>

```csharp
public double RequiredVcpuMinimumInput { get; }
```

- *Type:* double

---

##### `ExcludedInstanceFamilies`<sup>Required</sup> <a name="ExcludedInstanceFamilies" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.property.excludedInstanceFamilies"></a>

```csharp
public string[] ExcludedInstanceFamilies { get; }
```

- *Type:* string[]

---

##### `ExcludedInstanceGenerations`<sup>Required</sup> <a name="ExcludedInstanceGenerations" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.property.excludedInstanceGenerations"></a>

```csharp
public string[] ExcludedInstanceGenerations { get; }
```

- *Type:* string[]

---

##### `ExcludedInstanceTypes`<sup>Required</sup> <a name="ExcludedInstanceTypes" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.property.excludedInstanceTypes"></a>

```csharp
public string[] ExcludedInstanceTypes { get; }
```

- *Type:* string[]

---

##### `RequiredGpuMaximum`<sup>Required</sup> <a name="RequiredGpuMaximum" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.property.requiredGpuMaximum"></a>

```csharp
public double RequiredGpuMaximum { get; }
```

- *Type:* double

---

##### `RequiredGpuMinimum`<sup>Required</sup> <a name="RequiredGpuMinimum" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.property.requiredGpuMinimum"></a>

```csharp
public double RequiredGpuMinimum { get; }
```

- *Type:* double

---

##### `RequiredMemoryMaximum`<sup>Required</sup> <a name="RequiredMemoryMaximum" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.property.requiredMemoryMaximum"></a>

```csharp
public double RequiredMemoryMaximum { get; }
```

- *Type:* double

---

##### `RequiredMemoryMinimum`<sup>Required</sup> <a name="RequiredMemoryMinimum" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.property.requiredMemoryMinimum"></a>

```csharp
public double RequiredMemoryMinimum { get; }
```

- *Type:* double

---

##### `RequiredVcpuMaximum`<sup>Required</sup> <a name="RequiredVcpuMaximum" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.property.requiredVcpuMaximum"></a>

```csharp
public double RequiredVcpuMaximum { get; }
```

- *Type:* double

---

##### `RequiredVcpuMinimum`<sup>Required</sup> <a name="RequiredVcpuMinimum" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.property.requiredVcpuMinimum"></a>

```csharp
public double RequiredVcpuMinimum { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceRequirementsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ManagedInstanceAwsResourceTagSpecificationList <a name="ManagedInstanceAwsResourceTagSpecificationList" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ManagedInstanceAwsResourceTagSpecificationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationList.get"></a>

```csharp
private ManagedInstanceAwsResourceTagSpecificationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ManagedInstanceAwsResourceTagSpecificationOutputReference <a name="ManagedInstanceAwsResourceTagSpecificationOutputReference" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ManagedInstanceAwsResourceTagSpecificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.resetShouldTagAmis">ResetShouldTagAmis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.resetShouldTagEnis">ResetShouldTagEnis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.resetShouldTagSnapshots">ResetShouldTagSnapshots</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.resetShouldTagVolumes">ResetShouldTagVolumes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetShouldTagAmis` <a name="ResetShouldTagAmis" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.resetShouldTagAmis"></a>

```csharp
private void ResetShouldTagAmis()
```

##### `ResetShouldTagEnis` <a name="ResetShouldTagEnis" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.resetShouldTagEnis"></a>

```csharp
private void ResetShouldTagEnis()
```

##### `ResetShouldTagSnapshots` <a name="ResetShouldTagSnapshots" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.resetShouldTagSnapshots"></a>

```csharp
private void ResetShouldTagSnapshots()
```

##### `ResetShouldTagVolumes` <a name="ResetShouldTagVolumes" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.resetShouldTagVolumes"></a>

```csharp
private void ResetShouldTagVolumes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.property.shouldTagAmisInput">ShouldTagAmisInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.property.shouldTagEnisInput">ShouldTagEnisInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.property.shouldTagSnapshotsInput">ShouldTagSnapshotsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.property.shouldTagVolumesInput">ShouldTagVolumesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.property.shouldTagAmis">ShouldTagAmis</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.property.shouldTagEnis">ShouldTagEnis</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.property.shouldTagSnapshots">ShouldTagSnapshots</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.property.shouldTagVolumes">ShouldTagVolumes</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ShouldTagAmisInput`<sup>Optional</sup> <a name="ShouldTagAmisInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.property.shouldTagAmisInput"></a>

```csharp
public object ShouldTagAmisInput { get; }
```

- *Type:* object

---

##### `ShouldTagEnisInput`<sup>Optional</sup> <a name="ShouldTagEnisInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.property.shouldTagEnisInput"></a>

```csharp
public object ShouldTagEnisInput { get; }
```

- *Type:* object

---

##### `ShouldTagSnapshotsInput`<sup>Optional</sup> <a name="ShouldTagSnapshotsInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.property.shouldTagSnapshotsInput"></a>

```csharp
public object ShouldTagSnapshotsInput { get; }
```

- *Type:* object

---

##### `ShouldTagVolumesInput`<sup>Optional</sup> <a name="ShouldTagVolumesInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.property.shouldTagVolumesInput"></a>

```csharp
public object ShouldTagVolumesInput { get; }
```

- *Type:* object

---

##### `ShouldTagAmis`<sup>Required</sup> <a name="ShouldTagAmis" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.property.shouldTagAmis"></a>

```csharp
public object ShouldTagAmis { get; }
```

- *Type:* object

---

##### `ShouldTagEnis`<sup>Required</sup> <a name="ShouldTagEnis" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.property.shouldTagEnis"></a>

```csharp
public object ShouldTagEnis { get; }
```

- *Type:* object

---

##### `ShouldTagSnapshots`<sup>Required</sup> <a name="ShouldTagSnapshots" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.property.shouldTagSnapshots"></a>

```csharp
public object ShouldTagSnapshots { get; }
```

- *Type:* object

---

##### `ShouldTagVolumes`<sup>Required</sup> <a name="ShouldTagVolumes" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.property.shouldTagVolumes"></a>

```csharp
public object ShouldTagVolumes { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsResourceTagSpecificationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ManagedInstanceAwsRevertToSpotOutputReference <a name="ManagedInstanceAwsRevertToSpotOutputReference" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ManagedInstanceAwsRevertToSpotOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.property.performAtInput">PerformAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.property.performAt">PerformAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpot">ManagedInstanceAwsRevertToSpot</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PerformAtInput`<sup>Optional</sup> <a name="PerformAtInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.property.performAtInput"></a>

```csharp
public string PerformAtInput { get; }
```

- *Type:* string

---

##### `PerformAt`<sup>Required</sup> <a name="PerformAt" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.property.performAt"></a>

```csharp
public string PerformAt { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpotOutputReference.property.internalValue"></a>

```csharp
public ManagedInstanceAwsRevertToSpot InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsRevertToSpot">ManagedInstanceAwsRevertToSpot</a>

---


### ManagedInstanceAwsScheduledTaskList <a name="ManagedInstanceAwsScheduledTaskList" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ManagedInstanceAwsScheduledTaskList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskList.get"></a>

```csharp
private ManagedInstanceAwsScheduledTaskOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ManagedInstanceAwsScheduledTaskOutputReference <a name="ManagedInstanceAwsScheduledTaskOutputReference" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ManagedInstanceAwsScheduledTaskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.resetCronExpression">ResetCronExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.resetFrequency">ResetFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCronExpression` <a name="ResetCronExpression" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.resetCronExpression"></a>

```csharp
private void ResetCronExpression()
```

##### `ResetFrequency` <a name="ResetFrequency" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.resetFrequency"></a>

```csharp
private void ResetFrequency()
```

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.resetIsEnabled"></a>

```csharp
private void ResetIsEnabled()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.resetStartTime"></a>

```csharp
private void ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.property.cronExpressionInput">CronExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.property.frequencyInput">FrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.property.taskTypeInput">TaskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.property.cronExpression">CronExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.property.frequency">Frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.property.isEnabled">IsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.property.taskType">TaskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CronExpressionInput`<sup>Optional</sup> <a name="CronExpressionInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.property.cronExpressionInput"></a>

```csharp
public string CronExpressionInput { get; }
```

- *Type:* string

---

##### `FrequencyInput`<sup>Optional</sup> <a name="FrequencyInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.property.frequencyInput"></a>

```csharp
public string FrequencyInput { get; }
```

- *Type:* string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.property.isEnabledInput"></a>

```csharp
public object IsEnabledInput { get; }
```

- *Type:* object

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `TaskTypeInput`<sup>Optional</sup> <a name="TaskTypeInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.property.taskTypeInput"></a>

```csharp
public string TaskTypeInput { get; }
```

- *Type:* string

---

##### `CronExpression`<sup>Required</sup> <a name="CronExpression" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.property.cronExpression"></a>

```csharp
public string CronExpression { get; }
```

- *Type:* string

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.property.frequency"></a>

```csharp
public string Frequency { get; }
```

- *Type:* string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.property.isEnabled"></a>

```csharp
public object IsEnabled { get; }
```

- *Type:* object

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `TaskType`<sup>Required</sup> <a name="TaskType" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.property.taskType"></a>

```csharp
public string TaskType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsScheduledTaskOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ManagedInstanceAwsTagsList <a name="ManagedInstanceAwsTagsList" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ManagedInstanceAwsTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsList.get"></a>

```csharp
private ManagedInstanceAwsTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ManagedInstanceAwsTagsOutputReference <a name="ManagedInstanceAwsTagsOutputReference" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ManagedInstanceAwsTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.managedInstanceAws.ManagedInstanceAwsTagsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



